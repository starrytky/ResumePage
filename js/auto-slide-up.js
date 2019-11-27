!function(){
    let specialTags = document.querySelectorAll("[data-x]");
    let controller = {
        init: function () {
            this.addAndRemoveActive();
            this.addOffset();
            this.bindEvents();
        },
        bindEvents: function () {
            window.addEventListener("scroll", () => {
                this.removeOffset();
                this.findCloset();
            });
        },
        //增加移除active
        addAndRemoveActive: function () {
            let liTags = document.querySelectorAll("nav.menu > ul > li");
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add("active");
                };
                liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove("active");
                }
            }
        },
        //添加offset
        addOffset: function () {
            for (let i = 0; i < specialTags.length; i++) {
                specialTags[i].classList.add("offset");
            }
        },
        //删除offset
        removeOffset: function () {
            let minIndex = 0;
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[i - 1].offsetTop - window.scrollY)) {
                    minIndex = i;
                }
            }
            specialTags[minIndex].classList.remove("offset");
        },
        //增加移除高亮
        findCloset: function () {
            let specialTags = document.querySelectorAll("[data-x]");
            let minIndex = 0;
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[i - 1].offsetTop - window.scrollY)) {
                    minIndex = i;
                }
            }
            let id = specialTags[minIndex].id;
            let a = document.querySelector('a[href=\"#' + id + '\"]');
            let li = a.parentNode;
            let brothersAndMe = li.parentNode.children;
            for (let i = 0; i < brothersAndMe.length; i++) {
                brothersAndMe[i].classList.remove("highlight");
            }
            li.classList.add("highlight");
        }
    };
    controller.init();
}.call();


