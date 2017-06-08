<template>
  <div class="col-12 mt-3 d-flex justify-content-between align-items-center w-100 mb-4">
    <button type="button"
            name="button"
            class="btn btn-outline-danger float-md-left"
            @click="changePage(prevPage)"
            v-if="hasPrev()">Prev
    </button>
    <div class="">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"
              v-if="hasFirst()">
              <a href="#"
                 class="page-link"
                 @click="changePage(1)">1
              </a>
          </li>
          <li class="page-item">
            <a href="#"
               class="page-link"
               v-if="hasFirst()">...
            </a>
          </li>
          <li class="page-item"
              v-for="page in pages"
              :class="{active: current == page}">
            <a class="page-link"
               href="#"
               @click="changePage(page)">{{ page }}
            </a>
          </li>

          <li class="page-item">
            <a href="#"
               class="page-link"
               v-if="hasLast()">...
            </a>
          </li>
          <li class="page-item"
              v-if="hasLast()">
            <a href="#"
               class="page-link"
               @click="changePage(allPage)">{{allPage}}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <button type="button"
            name="button"
            class="btn btn-outline-danger float-md-right"
            @click="changePage(nextPage)"
            v-if="hasNext()">Next
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      perPage: {
        type: Number,
        default: 9
      },
      pageRange : {
        type: Number,
        default: 2
      }
    },
    computed: {
      pages () {
        let pages = []
        for (let i = this.rangeStart; i <= this.rangeEnd; i++){
          pages.push(i)
        }
        return pages
      },
      rangeStart () {
        let start = this.current - this.pageRange
        return (start > 0) ? start : 1
      },
      rangeEnd () {
        let end = this.current + this.pageRange
        return (end < this.allPage) ? end : this.allPage
      },
      nextPage () {
        return this.current + 1
      },
      prevPage () {
        return this.current - 1
      },
      allPage () {
        return Math.ceil(this.total / this.perPage)
      }
    },
    methods: {
      hasFirst () {
        return this.rangeStart !== 1
      },
      hasLast () {
        return this.rangeStart < this.allPage
      },
      hasPrev () {
        return this.current > 1;
      },
      hasNext () {
        return this.current < this.total;
      },
      changePage (page) {
        this.$emit('page-changer', page)
      }
    }
  }
</script>

<style>
.page-link {
    color: #666;
    background-color: rgb(255, 255, 255);
    border-color: rgb(0,0,0,.048);
}
.page-link:hover {
    color: rgb(217, 83, 79);
    background-color: #FFF;
}
.page-item.active .page-link {
    z-index: 2;
    color: rgb(255, 255, 255);
    background-color: rgb(217, 83, 79);
    border-color: rgb(217, 83, 79);
}
</style>
