<template>
  <div class="hello">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            NA BOOK Exchange - Dojo Vue.js
          </h1>
        </div>
      </div>
    </section>

    <div class="container books-list">
      <div class="columns">
        <div class="column is-3 is-offset-7">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
              <a class="button is-info">
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <button class="button is-link">Cadastrar Livro</button>
        </div>
      </div>

      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">Clean Code</p>
              <p class="subtitle is-6">Owner: @gmanara</p>
              <div class="level">
                <button class="button is-info">Detalhes</button>
                <button class="button is-primary">Emprestar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">Clean Code</p>
              <p class="subtitle is-6">Owner: @gmanara</p>
              <p class="button is-text is-danger">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container book-details">
      <article class="media">
        <figure class="media-left">
          <p class="image is-300x300">
            <img src='https://dummyimage.com/300x300.png' alt=''/>
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class="title is-4">Clean Code</p>
            <p class="title is-5">Owner: @gmanara</p>
            <p class="subtitle is-5">Borrowed: @fpulzi</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
            <div class="is-pulled-right">
              <button class="button is-primary">Emprestar</button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="container book-add">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Titulo">
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Autor">
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Name">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

