
document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (header.querySelector('.btn_open_menu')) {
        const btn_open_menu = header.querySelector('.btn_open_menu');
        const btn_close_menu = header.querySelector('.btn_close_menu');
        const header_overlay = header.querySelector('.header_overlay');

        btn_open_menu.addEventListener('click', () => {
            addClass(header, "open");
        })
        btn_close_menu.addEventListener('click', () => {
            removeClass(header, "open");
        })
        header_overlay.addEventListener('click', () => {
            removeClass(header, "open");
        })
    }

    if (header.querySelector('.menu')) {
        const headerMenu = header.querySelector('.menu');
        const AllDrop_2 = headerMenu.querySelectorAll('.drop_2');
        const drop_2_link = headerMenu.querySelectorAll('.cont_2 a');

        drop_2_link.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.screen.width < 1171) {
                    e.preventDefault();
                }
            })
        });
        AllDrop_2.forEach(drop => {
            let back_btn = drop.querySelector('.back_btn');
            drop.addEventListener('click', (e) => {
                if (window.screen.width < 1171 && !e.target.classList.contains('back_btn')) {
                    addClass(drop, 'open');
                }
            })
            back_btn.addEventListener('click', () => {
                if (window.screen.width < 1171) {
                    removeClass(drop, 'open');
                }
            })
        });
    }

    if (footer.querySelector('.menu_title')) {
        const menu_titles = footer.querySelectorAll('.menu_title');
        menu_titles.forEach(element => {
            element.addEventListener('click', (e) => {
                let cont = element.closest('.footer_menu_cont');

                if (window.screen.width < 501) {
                    e.preventDefault();
                    toggleClass(cont, "open");
                }
            })
        });
    }

    if (document.querySelector('[data-href]')) {
        const data_href = document.querySelectorAll('[data-href]');

        data_href.forEach(element => {
            element.addEventListener('click', () => {

                if (element.closest('.menu') && !element.classList.contains('.no-parent')) {

                    if (window.screen.width > 1170) {
                        window.location = element.getAttribute('data-href');
                    }

                } else {
                    window.location = element.getAttribute('data-href');
                }
            })
        });
    }

    if (document.querySelector('.sect_filt_v1')) {
        const sect_filt_v1 = document.querySelector('.sect_filt_v1');
        const all_btn_filt_v1 = sect_filt_v1.querySelectorAll('.btn_filt_v1');
        const all_cont_filt_v1 = sect_filt_v1.querySelectorAll('.cont_filt_v1');

        let num_1 = 0;
        let dataIdCheck;
        all_btn_filt_v1.forEach(btn => {
            let btnDataId = btn.getAttribute("data-id");
            if (num_1 == 0) {
                addClass(btn, 'active');
                dataIdCheck = btnDataId;
            } else {
                removeClass(btn, 'active');
            }

            all_cont_filt_v1.forEach(cont => {
                if (num_1 == 0) {
                    addClass(cont, 'invise');
                } else {
                    removeClass(cont, 'invise');
                }
            });

            btn.addEventListener('click', () => {


                all_btn_filt_v1.forEach(el => {
                    removeClass(el, 'active');
                })

                all_cont_filt_v1.forEach(cont => {
                    let contDataId = cont.getAttribute("data-id");
                    if (btnDataId != contDataId) {
                        addClass(cont, 'invise');
                    } else {
                        removeClass(cont, 'invise');
                    }
                });

                addClass(btn, 'active');
            })

            num_1++;
        });

        all_cont_filt_v1.forEach(cont => {
            let contDataId = cont.getAttribute("data-id");
            if (dataIdCheck != contDataId) {
                addClass(cont, 'invise');
            } else {
                removeClass(cont, 'invise');
            }
        });
    }

    if (document.querySelector('form')) {
        var overlay = document.querySelector('.overlay');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')

            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                })
            });
        }

    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');
        formSect.forEach(formSect => {


            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");

            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function clearInputs(input) {
                input.value = '';
            }

            function handleTextGood() {
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро с вами свяжется наш консультант!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                clearInputs(nameInp);
                clearInputs(phoneInp);
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                    // grecaptcha.ready(function () {
                    //     grecaptcha.execute('6Lfk9qspAAAAALXnyJqhAd6kX-ZFapXhfIN0DmQ-', { action: 'submit' }).then(function (token) {
                    //         let formData = new FormData();
                    //         formData.append('name', nameInp.value);
                    //         formData.append('phone', phoneInp.value);
                    //         formData.append('token', token);
                    //         fetch('/local/templates/main/tools/send.php', {
                    //             method: 'POST',
                    //             body: formData,
                    //         })
                    //             .then((res) => {
                    //                 return res.json();
                    //             })
                    //             .then(result => {
                    //                 if (result > 0.5) {
                    //                     handleTextGood();
                    //                 } else {
                    //                     handleTextNoGood();
                    //                 }
                    //             })
                    //             .catch((err) => {
                    //                 handleTextError();
                    //                 console.log(err);
                    //             })
                    //     });
                    // });
                    handleTextGood();
                }
            })
        });
    }

    console.log('index.js finish work');
});