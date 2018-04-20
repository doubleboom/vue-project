<template>
<div>
<Header><h2>首页</h2></Header>
<div class="content">
    <Banner :banners="banners"></Banner>
    <div class="category">
        <span>热门商品</span>
    </div>
    <div class="list">
        <ul>
            <li v-for="(hot,index) in hotBooks" :key="index">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
        </ul>
    </div>
</div>
<TabBar></TabBar>
</div>
</template>
<script>
import Header from "@/common/Header";
import TabBar from "@/common/TabBar";
import Banner from "@/common/Banner";
export default {
  data() {
    return {
      banners: [
        "http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg",
        "http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg"
      ],
      hotBooks: [
        {
          bookCover:
            "https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg",
          bookName: "Vue.js权威指南",
          bookInfo: "与React|Angular三分天下 ",
          bookPrice: 78.2,
          bookId: 1
        },
        {
          bookCover:
            "https://img11.360buyimg.com/n1/s200x200_jfs/t4540/29/2949953861/229268/af148d19/58f4ec87N10cf0e3a.jpg",
          bookName: "Vue.js权威指南",
          bookInfo: "与React|Angular三分天下 ",
          bookPrice: 88.2,
          bookId: 2
        },
        {
          bookCover:
            "https://img12.360buyimg.com/n1/s200x200_jfs/t3199/262/7067558943/58497/e77f3d90/58af0e1bNd71632d2.jpg",
          bookName: "Vue.js权威指南",
          bookInfo: "与React|Angular三分天下 ",
          bookPrice: 108.2,
          bookId: 3
        }
      ]
    };
  },
  methods: {},
  computed: {},
  components: { Header, TabBar, Banner }
};
</script>
<style scoped lang='less'>
.content {
  position: absolute;
  top: 50px;
  bottom: 50px;
  background: dodgerblue;
  .category {
      margin-bottom: 10px;
    span {
      color: #eee;
      margin: 6px 0px;
      border-bottom: 1px solid #ccc;
      padding: 0 10px 6px 10px;
      margin-bottom: 8px;
    }
  }

  .list {
    background: #fff;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>