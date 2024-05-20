
const selecionar_cliente = (val) => {
  qsa('.div-card-clientes').forEach(div => {
    div.classList.add('d-none')
  })
  if (val == '') return
  qs(`.div-card-cliente-${val}`).classList.toggle('d-none')
}

const linha_pedi = (prod) => {
  let pedi = qs(`#pedido-${prod.id}`)

  if (!pedi) {
    pedi = qs('#table-pedido > tbody').insertRow()
    pedi.id = `pedido-${prod.id}`
    pedi.innerHTML = `
      <th scope="row">${prod.id}</th>
      <td>${prod.descricao}</td>
      <td>0</td>
      <td>0.00</td>
      <td style="width:5%; text-align: center;">
        <a class="trash" href="javascript: excluir(${prod.id})" title="Excluir">
          <i class="fa fa-trash-alt"></i>
        </a>
      </td>
      <input type="hidden" id="hidden-pedidos-${prod.id}" name="hidden-pedidos[${prod.id}]" value="0">`
  }
  return pedi
}

var ant_item_a = ''
const atualiza_recomendacoes = () => {
  let item_a = ''
  document.querySelectorAll('input.form-control.text-center').forEach((e) => {
    if (e.value > 0) {
      item_a += 'P' + e.id.replace('input-produto-', '').padStart(2, '0') + ','
    }
  })
  item_a = item_a.substring(0,item_a.length - 1)

  if (ant_item_a != item_a) {
    ant_item_a = item_a
    fetch(`/venda/apriori?item_a=${item_a}`)
    .then(res => res.json())
    .then(els => {
      let html = ''
      els.forEach(e => {
        html += `
          <tr>
            <td>${e.descricao}</td>
            <td>${e.marca}</td>
            <td>${to_din(e.preco_venda)}</td>
          </tr>`
      })
      qs('#table-recomendacoes > tbody').innerHTML = html
    })
  }
}

const atualizar_pedido = (id, quant) => {
  let ele = qs(`#div-produto-${id}`)
  let prod = ele.dataset
  let pedi = linha_pedi(prod)
  let quantidade = parseInt(pedi.children[2].innerText) + quant
  qs(`#hidden-pedidos-${prod.id}`).value = quantidade

  if (quantidade > 0) {
    pedi.children[2].innerText = quantidade
    pedi.children[3].innerText = to_din(quantidade * to_num(prod.preco))
  } else {
    qs('#table-pedido').deleteRow(pedi.rowIndex)
    quantidade = 0
  }

  ele.querySelector('input').value = quantidade
  atualizar_total()
}

const excluir = (prod_id) => {
  let pedi = qs(`#pedido-${prod_id}`)
  qs('#table-pedido').deleteRow(pedi.rowIndex)
  qs(`#input-produto-${prod_id}`).value = 0
  atualizar_total()
}

const atualizar_total = () => {
  let total = 0
  qsa('#table-pedido > tbody > tr').forEach(tr => {
    total += to_num(tr.children[3].innerText)
  })
  qs('#input-total').value = to_din(total)

  if (qs('#table-pedido').offsetHeight > 580) {
    let h = qs('#table-pedido').offsetHeight + 100
    qs('div.card-produtos').style.height = `${h}px`
  }
  atualiza_recomendacoes()
}

const salvar = () => {
  if (parseFloat(qs('#input-total').value) == 0) {
    msg_erro('- Pedido deve ter ao menos um produto selecionado!')
  } if (qs('#select-cliente').value == '') {
    msg_erro('- Selecione o cliente!')
  } else {
    qs('form').submit()
  }
}

const msg_erro = (texto) => {
  qs('#modal-validacao-texto').innerText = texto
  new bootstrap.Modal(qs('#modal-validacao'), {}).show()
}

atualiza_recomendacoes()