<template>
  <div class="row">
    <div class="col-sm-12 mb-5 mt-3">
      <h1><strong>{{message}}</strong></h1>
    </div>
    <div class="alert alert-danger col-12"
         v-for="error in errors"
         v-if="getError">
      {{error}}
    </div>


  <div class="card-columns">
    <div class="card"
         v-for="photo in photos"
         :key="photo">
      <img class="card-img-top img-fluid w-100"
           :src="photo.urls.small"
           alt="" @click="lightbox(photo)">
      <div class="card-footer align-items-center">
        <img :src="photo.user.profile_image.small"
             alt=""
             class="rounded-circle mr-2">
          <a :href="photo.user.portfolio_url"
             target="_blank">{{photo.user.name}}</a>
      </div>
    </div>

  </div>

  <pagination :current="currentPage"
  :total="totalPhotos"
  :perPage="perPage"
  @page-changer="fetchPhotos">
</pagination>

  <div class="myModal" v-if="lightboxlaunch">
    <span class="close" @click="lightboxlaunch = false" aria-hidden="true">✕</span>
    <div class="">
    </div>
  </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

let appId1 = 'e29a1c968bd398482fc27b88c09683ce95f210d92a83fdaebfb0ff9528c3285f'
let appId2 = '2fed940c46c4615e1ca90155c8db82782f9ec03a09d4f8b5d22568456ab2c821'

export default {
  data () {
    return {
      message: 'Weel. - Photo\'s App',
      photos: [],
      totalPhotos: 0,
      perPage: 100,
      currentPage: 1,
      errors: [],
      getError: false,
      lightboxlaunch: false
    }
  },
  methods: {
    fetchPhotos (page) {
      let options = {
        params : {
          client_id: appId2,
          page: page,
          per_page: this.perPage
        }
      }
      this.$http.get('https://api.unsplash.com/photos/', options)
        .then(response => {
          this.photos = response.data
          this.totalPhotos = parseInt(response.headers.get('x-total'))
          this.currentPage = page
        })
      .catch(error => {
        this.getError = true
        this.errors = error
      });
    },
    lightbox (photo) {
      this.lightboxlaunch = true;
      console.log('lightbox launches');
      return this.photos.map(image => {
        return this.photos.find( () => image.id == photo.id)
      })
    }
  },
  created () {
    this.fetchPhotos(this.currentPage);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  cursor: pointer;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-family: Courier;
  color: #42b983;
}
.myModal {
  padding: 100px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, .4);
  z-index: 3;
  overflow: hidden;
}
.close{
  color: white;
  z-index: 10;
  cursor: pointer;
  font-size: 32px;
}
@media (max-width: 575px) {
  .card {
    margin: 20px 0;
  }
}
</style>



















































































<!-- this.$http.get('https://api.unsplash.com/photos/?page='+ page + '&client_id=' + appId + '&per_page=' + this.perPage ) -->
