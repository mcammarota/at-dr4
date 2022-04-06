<template>
  <div class="container">
    <strong><h2 class="text-center mt-5">LOJA DO MARCOS</h2></strong>
    <br />
    <div class="form">
        <label for="Cliente">Cliente</label>
        <input v-model="cliente" type="text" class="form-control">
        <br />
        <label for="Roupa">Roupa
          <select v-model="roupa" required>
              <option value="Camiseta">Camiseta</option>
              <option value="Regata">Regata</option>
              <option value="Casaco">Casaco</option>
          </select>
        </label>
        <br />
        <br />
        <label for="Quantidade">Quantidade</label>
          <input v-model="quantidade" type="number" required class="form-control">
        <br />
        <label for="Descricao">Descrição</label>
          <textarea v-model="descricao" type="text" required class="form-control">
          </textarea>
        <br />
        <button @click="cadastrarPedido" class="btn btn-success">Salvar</button>
    </div>
    
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Roupa</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Descrição</th>
          <th scope="col">Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pedido, id) in pedidos" :key="id">
            <td>{{ pedido.cliente }}</td>
            <td>{{ pedido.roupa }}</td>
            <td>{{ pedido.quantidade }}</td>
            <td>{{ pedido.descricao }}</td>
            <td>{{ pedido.data }}</td>
            <td><button @click="editarPedido(id)" class="btn btn-warning">Editar</button></td>
            <td><button @click="excluirPedido(id)" class="btn btn-danger">Excluir</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
    name: 'Pedido',

    data() {
        return {
        pedido: '',
        cliente: '',
        descricao: '',
        pedidos: [
            {
            cliente: 'exemplo',
            roupa: 'exemplo',
            quantidade: '0',
            descricao: 'exemplo',
            data: '4/4/2022 1:00:00 PM'
            },
          ]
        }
    },

    methods: {
        cadastrarPedido() {
          if(this.cliente.length <= 0) {
            alert('Informe o nome do cliente!');
            return;
          }
          if(this.quantidade == null) {
            alert('Informe a quantidade!');
            return;
          }
          if(this.roupa == null) {
            alert('Informe a roupa!');
            return;
          }
          if(this.quantidade > 10) {
            alert('Não pode pedir mais de 10 peças iguais!')
            return
          }
            this.pedidos.push({
            cliente: this.cliente,
            roupa: this.roupa,
            quantidade: this.quantidade,  
            descricao: this.descricao, 
            data: new Date().toLocaleString(),
          });
          this.pedido = '';
        },

        excluirPedido(id) {
            this.pedidos.splice(id, 1);
        },

        ...mapActions(["Pedido"]),
    }
}
</script>

<style scoped>
  .container {
    width: 1000px;
  }
  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 26px;
  }

  label {
    font-size: 20px;
  }

  label select option {
    font-size: 16px;
  }
</style>
