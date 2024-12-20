import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  async getHtml() {
    return `
    <div>
        <h2>Home</h2>
    </div>
    <section class="vh-75 gradient-custom">
  <div class="container py-0 h-100">
    <div class="row d-flex justify-content-center pt-3 h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white login-card" style="border-radius: 1rem;">
          <div class="card-body py-3 px-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-2">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-dark mb-5">Please enter your login and password!</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="email"/>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input placeholder="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
              </div>

              <p class="small mb-3 pb-lg-2"><a class="text-dark reset-password-link" href="#!">Forgot password?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="sign-up-link text-dark fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `;
  }
}
