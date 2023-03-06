<template>
  <footer class="site-footer">
    <div class="container">
      <div class="content-footer">
        <h6>About</h6>
        Với triết lý kinh doanh đặt khách hàng là trọng tâm, <i>NyLy</i> xin hứa sẽ không ngừng cải thiện để nâng cao
        chất lượng sản phẩm, dịch vụ, mang đến cho Quý khách hàng những trải nghiệm mua sắm tốt nhất để đáp lại sự tin
        tưởng của bạn dành cho chúng tôi. Hy vọng trong thời gian sắp tới, chúng tôi sẽ tiếp tục nhận được sự tin tưởng
        của bạn. Một lần nữa, chúng tôi xin gửi lời cảm ơn chân thành đến Quý khách hàng. Chúc bạn luôn có nhiều sức
        khỏe, may mắn và thành công!
      </div>

      <div class="category-wrapper">
        <h6>Customer Service</h6>
        <ul class="footer-links">
          <li class="menu-item">
            <a href="#">FAQ</a>
          </li>
          <li class="menu-item">
            <a href="#">Returns & Refunds</a>
          </li>
          <li class="menu-item">
            <a href="#">Cookie Guidelines</a>
          </li>
          <li class="menu-item">
            <a href="#">Delivery Information</a>
          </li>
        </ul>
      </div>

      <div class="myself-wrapper">
        <h6>NyLy Store</h6>
        <ul class="footer-links">
          <li><a href="http://scanfcode.com/about/">About Us</a></li>
          <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Our Journals</a></li>
          <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/">Affiliate Programme</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="container-icon">
      <div class="icon-wrapper">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            </li>
            <li>
              <a class="linkedin" href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  .container {
    display: flex;
    width: 95%;
    margin: auto;
    .content-footer {
      width: 50%;
    }
    .category-wrapper {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .myself-wrapper {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .container-icon {
    width: 100%;
    .icon-wrapper {
      margin-right: 20px;
      margin-left: auto;
      width: 20%;
    }
  }
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
}
.footer-links li a {
  padding-left: 0;
  list-style: none;
  text-decoration: none;
}
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: white;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^='col-'] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
