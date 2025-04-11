
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

    let loadSvg = document.getElementById('load-svg');

    function addLoad() {
        addClass(loadSvg, 'open');
    }
    function removeLoad() {
        removeClass(loadSvg, 'open');
    }

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

    if (document.querySelector('.checkbox')) {
        const checkboxs = document.querySelectorAll('.checkbox');

        checkboxs.forEach(el => {
            let checkBoxBtn = el.querySelector('.check-box-btn');

            checkBoxBtn.addEventListener('click', () => {
                if (checkBoxBtn.getAttribute('data-toggle') == 'y') {
                    toggleClass(el, 'checked');
                } else {
                    addClass(el, 'checked');
                    removeClass(el, 'err');
                }
            })
        });
    }

    if (document.querySelector('.max-stroke-cont')) {
        const maxStrokeConts = document.querySelectorAll('.max-stroke-cont');

        maxStrokeConts.forEach(maxStrokeCont => {
            let maxStroke = maxStrokeCont.querySelector('.max-stroke');
            let maxMobStroke = maxStroke.getAttribute('data-mob-max-stroke');
            let btnMore = maxStrokeCont.querySelector('.btn-more');
            let btnMoreText = btnMore.textContent.trim();
            let lineHeight = parseInt(window.getComputedStyle(maxStroke).lineHeight);
            let lineCount = Math.ceil(maxStroke.scrollHeight / lineHeight) - 1;

            if (maxMobStroke) {
                if (lineCount > 4 && window.screen.width > 500) {
                    removeClass(btnMore, 'invise');
                } else if (lineCount > maxMobStroke && window.screen.width < 501) {
                    removeClass(btnMore, 'invise');
                }
            } else {
                if (lineCount > 4 && window.screen.width > 500) {
                    removeClass(btnMore, 'invise');
                } else if (lineCount > 6 && window.screen.width < 501) {
                    removeClass(btnMore, 'invise');
                }
            }


            btnMore.addEventListener('click', () => {
                if (btnMore.classList.contains('open')) {
                    addClass(maxStroke, 'max-stroke');
                    removeClass(btnMore, 'open');
                    btnMore.textContent = btnMoreText;
                } else {
                    removeClass(maxStroke, 'max-stroke');
                    addClass(btnMore, 'open');
                    btnMore.textContent = 'скрыть';
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

    if (document.querySelector('.quest')) {

        const quest = document.querySelector('.quest');

        if (quest.querySelector(".sect .title")) {
            const titles = quest.querySelectorAll(".sect .title");

            titles.forEach((title) => {

                let sect_check = title.closest(".sect"); // Находим родительский .sect
                let cont_check = sect_check.querySelector(".cont"); // Находим .cont внутри .sect



                if (sect_check.classList.contains("active")) {
                    // Вычисляем реальную высоту содержимого
                    cont_check.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                    const height = cont_check.scrollHeight; // Получаем высоту содержимого
                    cont_check.style.height = "0"; // Возвращаем высоту к 0 для анимации
                    setTimeout(() => {
                        cont_check.style.height = `${height}px`; // Устанавливаем высоту для анимации
                    }, 10); // Небольшая задержка для корректной работы браузера
                } else {
                    // Анимируем закрытие
                    cont_check.style.height = `${cont_check.scrollHeight}px`; // Фиксируем текущую высоту
                    setTimeout(() => {
                        cont_check.style.height = "0"; // Уменьшаем высоту до 0
                    }, 10); // Небольшая задержка для корректной работы браузера
                }

                sect_check.addEventListener('click', () => {
                    const cont = sect_check.querySelector(".cont"); // Находим .cont внутри .sect

                    // Переключаем класс active
                    sect_check.classList.toggle("active");

                    if (sect_check.classList.contains("active")) {
                        // Вычисляем реальную высоту содержимого
                        cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                        const height = cont.scrollHeight; // Получаем высоту содержимого
                        cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                        setTimeout(() => {
                            cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                        }, 10); // Небольшая задержка для корректной работы браузера
                    } else {
                        // Анимируем закрытие
                        cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                        setTimeout(() => {
                            cont.style.height = "0"; // Уменьшаем высоту до 0
                        }, 10); // Небольшая задержка для корректной работы браузера
                    }
                })

            });
        }

    }

    if (document.querySelector(".sect_reit_cont")) {
        const sectCont = document.querySelector(".sect_reit_cont");

        const oneReitCont = sectCont.querySelectorAll(".one-reit-cont");

        oneReitCont.forEach(element => {
            let ratingElement = element.querySelector(".reit");
            let stars = element.querySelectorAll(".star");

            // Получаем рейтинг из текстового содержимого
            let rating = parseFloat(ratingElement.textContent.trim());

            // Проходим по всем звездам
            stars.forEach((star, index) => {

                let gradient = star.querySelector("linearGradient");
                let stop1 = gradient.querySelector("stop[offset='100%']");
                let stop2 = gradient.querySelector("stop[offset='0%']");

                // Вычисляем процент заполнения для текущей звезды
                let starIndex = index + 1; // Индекс звезды (начиная с 1)
                let fillPercentage;

                if (rating >= starIndex) {
                    // Если рейтинг больше или равен индексу звезды, заливаем полностью
                    fillPercentage = 100;
                } else if (rating > starIndex - 1) {
                    // Если рейтинг частично попадает на эту звезду, вычисляем процент
                    fillPercentage = (rating - (starIndex - 1)) * 100;
                } else {
                    // Если рейтинг меньше индекса звезды, не заливаем
                    fillPercentage = 0;
                }

                // Устанавливаем процент заливки для градиента
                stop1.setAttribute("offset", `${fillPercentage}%`);
                stop2.setAttribute("offset", `${fillPercentage}%`);
            });
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
            let emailInp = formSect.querySelector("[name='email']");

            let selectType = formSect.querySelector("[name='type']");
            let selectSquare = formSect.querySelector("[name='square']");
            let typeCheckBoxs = formSect.querySelectorAll(".select_cont .checkbox");
            let checkBoxBtn = formSect.querySelector("[data-processing]");

            function allCheck() {
                if (form.classList.contains("calc")) {
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkSelect(selectType) && checkSelect(selectSquare) && checkTypeCheckBoxs(typeCheckBoxs) && checkCheckBox(checkBoxBtn)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkCheckBox(checkBoxBtn)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            function checkCheckBox(checkbox) {
                if (checkbox.classList.contains('checked')) {
                    removeClass(checkbox, 'err');
                    return true;
                } else {
                    addClass(checkbox, 'err');
                    return false;
                }
            }

            function checkTypeCheckBoxs(array) {
                let check;
                let parant;
                array.forEach(element => {
                    parant = element.closest('.select_cont');
                    if (element.classList.contains('checked')) {
                        check = true;
                    }
                });
                if (check) {
                    removeClass(parant, 'err');
                    return true;
                } else {
                    addClass(parant, 'err');
                    formBtn.disabled = true;
                    return false;
                }
            }

            function checkSelect(select) {


                if (select.value.length > 0) {
                    removeClass(select.closest('.select_cont'), 'err');
                    return true;
                } else {
                    addClass(select.closest('.select_cont'), 'err');
                    formBtn.disabled = true;
                    return false;
                }
            }

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
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            let check_2;

            function addLisSelect(select) {
                checkSelect(select);
                select.addEventListener('click', check_2 = () => {
                    checkSelect(select);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisSelect(select) {
                select.removeEventListener('click', check_2)
            }

            let check_3;

            function addLisCheck(array) {
                checkTypeCheckBoxs(array);
                array.forEach(element => {
                    element.addEventListener('click', check_3 = () => {
                        checkTypeCheckBoxs(array);
                        if (allCheck()) {
                            formBtn.disabled = false;
                        } else {
                            formBtn.disabled = true;
                        }
                    })
                });
            }

            function removeLisCheck(array) {
                array.forEach(element => {
                    element.removeEventListener('click', check_3)
                });
            }

            let check_4;

            function addLisCheckBox(checkbox) {
                checkCheckBox(checkbox);
                checkbox.addEventListener('click', check_4 = () => {
                    checkCheckBox(checkbox);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisCheckBox(checkbox) {
                checkbox.removeEventListener('click', check_4);
            }

            function clearInputs(input) {
                removeLisInput(input);

                removeClass(checkBoxBtn, 'err');
                removeClass(checkBoxBtn, 'checked');
                input.value = '';
            }

            function clearSelects(select) {
                removeLisSelect(select);
                select.selectedIndex = 0;
            }
            function clearTypes(array) {
                array.forEach(element => {
                    removeClass(element, "checked");
                });
            }

            function handleTextGood() {
                removeLoad();
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро с вами свяжется наш консультант!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                if (nameInp) {
                    clearInputs(nameInp);
                }
                clearInputs(phoneInp);
                if (emailInp) {
                    clearInputs(emailInp);
                }
                if (form.classList.contains("calc")) {
                    clearSelects(selectSquare);
                    clearSelects(selectType);
                    clearTypes(typeCheckBoxs);
                }
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                removeLoad();
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
                removeLoad();
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

                removeLisCheckBox(checkBoxBtn);
                addLisCheckBox(checkBoxBtn);

                if (form.classList.contains("calc")) {
                    removeLisCheck(typeCheckBoxs);
                    addLisCheck(typeCheckBoxs);

                    removeLisSelect(selectType);
                    addLisSelect(selectType);

                    removeLisSelect(selectSquare);
                    addLisSelect(selectSquare);
                }

                if (allCheck()) {
                    addLoad();
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