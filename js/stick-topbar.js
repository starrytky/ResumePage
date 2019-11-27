!function () {
    let view = document.querySelector("#topNavBar");
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            window.addEventListener("scroll", () => {
                window.scrollY > 0 ? this.active() : this.disActive();
            });
        },
        active: function () {
            this.view.classList.add("sticky");
        },
        disActive: function () {
            this.view.classList.remove("sticky");
        }
    };
    controller.init(view);
}.call();