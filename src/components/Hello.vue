<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col box">
        <div class="box__wrapper">
          <header class="l-header">
            <img src="../assets/logo.png">
          </header>
          <div class="form-group">
            <input class="form-control" placeholder="Pesquise por prato" type="text">
          </div>
          <div class="media">
            <img class="d-flex mr-3" src="https://dummyimage.com/150x150.png" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">Parmegiana <span class="badge badge-secondary">Indisponível</span></h5>
              <div>R$ 19,90</div>
              <p>Parmegiana de fillet mignon</p>
              <button class="btn btn-secondary">Incluir no Pedido</button>
            </div>
          </div>

          <div class="media">
            <img class="d-flex mr-3" src="https://dummyimage.com/150x150.png" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">Parmegiana</h5>
              <div>R$ 19,90</div>
              <p>Parmegiana de fillet mignon</p>
              <button class="btn btn-primary">Incluir no Pedido</button>
            </div>
          </div>

          <div class="media">
            <img class="d-flex mr-3" src="https://dummyimage.com/150x150.png" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">Parmegiana</h5>
              <div>R$ 19,90</div>
              <p>Parmegiana de fillet mignon</p>
              <button class="btn btn-primary">Incluir no Pedido</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 box">
        <div class="box__wrapper">
          <header class="l-header">
            <h2>Seu pedido</h2>
          </header>
          <div class="row">
            <div class="col">
              <p>Parmegiana</p>
            </div>
            <div class="col">
              <p class="text-right" scale="2">R$ 19,90 <a href=""><icon name="close"></icon></a></p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>Parmegiana</p>
            </div>
            <div class="col">
              <p class="text-right">R$ 19,90</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>Parmegiana</p>
            </div>
            <div class="col">
              <p class="text-right">R$ 19,90</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col">
              <p>Total</p>
            </div>
            <div class="col">
              <p class="text-right">R$ 209,90</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col box">
        <div class="box__wrapper">
          <header class="l-header">
            <h2>Inventário</h2>
          </header>
          <div class="product">

            <div class="form-group">
              <div class="form-inline">
                <input type="text" class="form-control col-md-4" id="inlineFormInput" placeholder="Nome do Prato">
                <input type="text" class="form-control col-md-4" id="inlineFormInput" placeholder="Preço">
                <select class="custom-select col-md-4" id="inlineFormCustomSelect">
                  <option value="1">Disponível</option>
                  <option value="2">Indisponível</option>
                </select>
              </div>
              <input type="text" class="form-control" id="inlineFormInput" placeholder="URL da Imagem">
              <button class="btn btn-secondary btn-block">Remover item</button>
            </div>
            <hr>

            <button class="btn btn-primary btn-block">Adicionar item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

