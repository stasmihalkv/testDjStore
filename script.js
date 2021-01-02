$(document).ready(function() {

    let header = $("header");
        headerMenuToggle = $(".header__menu-toggle");
        headerMenu = $(".header__menu");
        headerMenuUl = $(".header__menu ul");
        headerMenuLi = $(".header__menu li");
        headerItemsText= $(".header__mail-address, .header__call-telephone");
        headerItems= $(".header__mail, .header__call");
        headerCallTitle = $(".header__call-title");
        popUpWrapper = $(".popUp-wrapper");
        popUpSubmit = $(".popUp-submit");
        slider = $(".slider");
        sliderWrapper = $(".slider .wrapper");
        sliderItems = document.querySelectorAll(".slider__form__item");
        sliderBlock = $(".slider__block");
        sliderCallBtn = $(".slider__form-callBtn");
        sliderForm = $(".slider__form");
        sliderFormBtn = $(".slider__form-fillBtn");
        sliderMobileText = $(".slider__mobile-text");
        sliderPrevBtn = $(".block-buttons__prev-btn");
        sliderPrevBtnActive = document.querySelector(".block-buttons__prev-btn img");
        sliderNextBtn = $(".block-buttons__next-btn");
        mainBlock = $(".mainBlock__gallery");
        popUpForm = $(".popUp-form");
        popUpForminputs = $(".popUp-form__input");
        popUpFormCheckBox = document.querySelector("#popUp__chbx");
        popUpFormCloseBtn = $(".popUp-form .popUp-submit__close-btn");
        popUpFormConfirmBtn =  $(".popUp-form__confirm-btn");
        popUpFormWarningsName = $(".form-warnings-name")
        popUpFormWarningsPhone = $(".form-warnings-phone")
        popUpSubmitCloseBtn = $(".popUp-submit__close-btn");
        popUpSubmitOkBtn = document.querySelector(".popUp-submit .popUp__btn");
        popUp2Btn = $(".popUp2-btn");
        popUp2 = $(".popUp2");
        popUp2CloseBtn = $(".popUp2__close-btn");

    window.onresize = function() {
        if(window.innerWidth > 375){
            headerMenu.removeAttr('style');
            headerMenuUl.removeAttr('style');
            header.removeClass("headerMobile");
            slider.removeClass("mobile");
            sliderFormBtn.removeClass("form-fillBtn-active");
            sliderMobileText.removeClass("active")
            mainBlock.removeClass("visibility");
            sliderCallBtn.removeClass("opacity");
            sliderBlock.removeClass("opacity");
            }
            checkMobile()
    };

    
    function checkMobile(){
        if(header.hasClass("headerMobile")){
         headerItemsText.addClass('headerScroll__items-active')
         }
         else{
             headerItemsText.removeClass('headerScroll__items-active')
         }
    }
    
    function popUpFormOpen(){
        popUpWrapper.addClass('active')
        popUpForm.fadeIn(400);
        popUpFormConfirmBtn.on('click', popUpFormValidate)
    }
    function popUpSubmitClose(){
        popUpSubmit.fadeOut(400)
        popUpWrapper.removeClass('active')
    }
    function popUpFormClose(){
        popUpSubmit.fadeOut(400)
        popUpWrapper.removeClass('active')
    }

    popUpSubmitCloseBtn.on('click', popUpSubmitClose);
    popUpSubmitOkBtn.onclick = popUpSubmitClose;
    sliderCallBtn.on('click', popUpFormOpen);
    headerCallTitle.on('click', popUpFormOpen);
    popUpFormCloseBtn.on('click',popUpFormClose);
    popUp2Btn.on('click', function(){
        popUp2.stop(true, false).fadeToggle(400)
    })

    popUp2CloseBtn.on('click', function(){
        popUp2.fadeOut(400)
    })

    $(document).mouseup(function(e){
        if(popUp2.has(e.target).length === 0){
            popUp2.fadeOut(400)
        }
    });

    /*
    if(pageYOffset>=130){
        header.classList.add('headerScroll-active')
        headerMenuLi.addClass('headerScroll__items-active')
    }*/

    $(window).scroll(function(){
        if(pageYOffset>=130){
            header.addClass('headerScroll-active')
            if(window.innerWidth > 600){
                headerMenuLi.addClass('headerScroll__items-active')
            }
            headerItemsText.addClass('headerScroll__items-active')
            if(window.innerWidth > 600 && window.innerWidth < 820){
                headerItems.addClass("visibility")
            }
        }
        else{
            header.removeClass('headerScroll-active');
            headerMenuLi.removeClass('headerScroll__items-active');
            headerItemsText.removeClass('headerScroll__items-active');
            headerItems.removeClass("visibility");
            checkMobile()
        }

    })

    headerMenuToggle.on('click', function(){
        header.toggleClass("headerMobile");
        headerMenu.slideToggle()
        slider.toggleClass("mobile");
        if(window.innerWidth <= 375){
            sliderMobileText.toggleClass("active")
            mainBlock.toggleClass("visibility"); 
        }
        sliderFormBtn.toggleClass("form-fillBtn-active");
        sliderCallBtn.toggleClass("opacity");
       // headerItemsText.addClass('headerScroll__items-active')
       checkMobile()
    })
    
//owl
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      margin:72,
      nav:false,
      items: 2,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      transitionStyle: "fade"
    });

    sliderNextBtn.click(function() {
        owl.trigger('next.owl.carousel');
        fwrdItemSlide()
        sliderPrevBtnActive.src = (i==0) ?  "css/prevunactvprev.svg" : "css/prevActvprev.png"
    });
    sliderPrevBtn.click(function() {
        owl.trigger('prev.owl.carousel');
        backItemSlide() 
        sliderPrevBtnActive.src = (i==0) ?  "css/prevunactvprev.svg" : "css/prevActvprev.png" 
    });

    let cnt = 0;
    function fwrdItemSlide(){
        sliderItems[cnt].classList.remove('active');
        cnt++;
        if(cnt>sliderItems.length-1){
            cnt=0
        }
        sliderItems[cnt].classList.add('active')
        changeSliderBg()    
    }

    function backItemSlide(){   
        sliderItems[cnt].classList.remove('active');
        cnt--;
        if(cnt<1){
            cnt=sliderItems.length-1
        }
        sliderItems[cnt].classList.add('active')   
        changeSliderBg()
    }

    function changeSliderBg(){
        switch (cnt){
            case 0:
                slider.css({
                    "backgroundImage" : "url('/css/blockbg.jpg')", 
                    "backgroundSize" : "cover",
                    "backgroundRepeat":"no-repeat",
                    });
                break;
            case 1:
                slider.css({
                    "backgroundImage" : "url('/css/blockbg_second.jpg')", 
                    "backgroundSize" : "cover",
                    "backgroundRepeat":"no-repeat",
                });
                break;
            case 2:
                slider.css({
                    "backgroundImage" : "url('/css/blockbg3.jpg')", 
                    "backgroundSize" : "cover",
                    "backgroundRepeat":"no-repeat",
                    });
                break;     
        }
        if(cnt>2){
            slider.css({
                "backgroundImage" : "none", 
                "backgroundSize" : "cover",
                "backgroundRepeat":"no-repeat",
                });
        }
    }
    for(i=0;i<popUpForminputs.length;i++){
        var a;
        var b;
        popUpForminputs[i].oninput = function(){
            if(this.dataset.number=='0'){
                if(isNaN(this.value)){
                    this.classList.remove('err');
                    this.classList.add('success');
                    a = this.value;
                    popUpFormWarningsName.html("")
                }
                else {
                    this.classList.remove('success')
                    this.classList.add('err')
                    popUpFormWarningsName.html("Имя не может содержать только численные значения")
                }
                
            }
            else if(this.dataset.number=='1'){
                if(!isNaN(this.value)){
                    this.classList.remove('err');
                    this.classList.add('success');
                    b = this.value;
                    popUpFormWarningsPhone.html("")
                }
                else{
                    this.classList.remove('success')
                    this.classList.add('err')
                    popUpFormWarningsPhone.html("Телефон должен состоять из цифр")
                }
            }
        }
        popUpForminputs[i].onblur = function(){
            if(this.value==''){
                popUpFormWarningsName.html("")
                popUpFormWarningsPhone.html("")
                this.classList.remove('err');
                this.classList.remove('success');
            }
        }
    }
    function popUpFormValidate(){
        for(i=0;i<popUpForminputs.length;i++){
            if(popUpForminputs[0].classList.contains('success') && popUpForminputs[1].classList.contains('success') && popUpFormCheckBox.checked == true){
                    alert("Имя: " + a + " Номер: "+ b);
                        popUpForm.fadeOut(400);
                        popUpSubmit.fadeIn(400);
                        popUpForminputs.val("");

                for(j=0;j<popUpForminputs.length;j++){
                    popUpForminputs[j].classList.remove('success');
                }
            }

            
        }
    }






});