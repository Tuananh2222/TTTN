<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="footer-menu-list">
          <div class="row d-flex flex-wrap justify-content-between">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">NyLy</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#">About us</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Conditions </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Our Journals</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Careers</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Affiliate Programme</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">NyLy Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Customer Service</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#">FAQ</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Contact</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Privacy Policy</a>
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
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Contact Us</h5>
                <p>Do you have any questions or suggestions? <a href="#" class="email">vut5441@gmail.com</a></p>
                <p>
                  Do you need assistance? Give us a call. <br />
                  <strong>0971935724</strong>
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Forever 2018</h5>
                <p>
                  Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget
                  arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.
                </p>
                <div class="social-links">
                  <ul class="d-flex list-unstyled">
                    <li>
                      <a href="#">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon icon="fa-brands fa-square-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
#footer{
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
#footer .footer-menu {
  margin-right: 50px;
}
.footer-menu h5.widget-title {
  font-size: 1.3em;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 40px;
}
.footer-menu {
  strong {
    font-weight: bold;
  }
}
.footer-menu ul.menu-list a {
  color: $accent-color;
}
.footer-menu ul.menu-list a:hover {
  color: $primary-color;
}
.footer-menu a.email {
  color: $accent-color;
  text-decoration: underline;
  font-weight: 600;
}
.social-links li {
  padding-right: 20px;
}
</style>
