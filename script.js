window.onload=function(){

    let header = $("header");
        headerItems = $(".header__menu li, .header__mail-address, .header__call-telephone, .header__call-telephone")
        headerMenuToggle = $(".header__menu-toggle");
        headerMenu = $(".header__menu");
        headerMenuList = $(".header__menu ul");
        headerCallTitle = $(".header__call-title");
        popUpWrapper = $(".popUp-wrapper");
        popUpSubmit = $(".popUp-submit");
        slider = $(".slider");
        sliderTitls = $(".slider__form-title");
        sliderCallBtn = $(".slider__form-callBtn");
        sliderFormBtn = $(".slider__form-fillBtn");
        sliderMobileText = $(".slider__mobile-text");
        sliderPrevBtn = $(".block-buttons__prev-btn");
        sliderPrevBtnActive = document.querySelector(".block-buttons__prev-btn img");
        sliderNextBtn = $(".block-buttons__next-btn");
        mainBlock = $(".mainBlock__gallery");
        popUpForm = $(".popUp-form");
        popUpFormCloseBtn = $(".popUp-form .popUp-submit__close-btn");
        popUpFormConfirmBtn =  $(".popUp-form__confirm-btn");
        popUpSubmitCloseBtn = $(".popUp-submit__close-btn");
        popUpSubmitOkBtn = document.querySelector(".popUp-submit .popUp__btn");
        popUp2Btn = $(".popUp2-btn");
        popUp2 = $(".popUp2");
        popUp2CloseBtn = $(".popUp2__close-btn");

    if(pageYOffset>=130){
        header.classList.add('headerScroll-active')
        headerItems.addClass('headerScroll__items-active')
    }
    window.onresize = function() {
        if(window.innerWidth > 375){
            headerMenu.removeAttr('style');
            headerMenuList.removeAttr('style');
            slider.removeClass("mobile");
            sliderFormBtn.removeClass("form-fillBtn-active");
            sliderMobileText.removeClass("active")
            mainBlock.removeClass("visibility");
            }
    };
    function popUpFormOpen(){
        popUpWrapper.addClass('active')
        popUpForm.fadeIn(400);
        popUpFormConfirmBtn.on('click',function(){
            popUpForm.fadeOut(400);
            popUpSubmit.fadeIn(400)  
        })
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
    if(pageYOffset>=130){
        header.classList.add('headerScroll-active')
        headerItems.addClass('headerScroll__items-active')
    }
    window.addEventListener('scroll', function(){
        if(pageYOffset>=130){
            header.addClass('headerScroll-active')
            headerItems.addClass('headerScroll__items-active')
        }
        else{
            header.removeClass('headerScroll-active')
            headerItems.removeClass('headerScroll__items-active')
        }
    })
    headerMenuToggle.on('click', function(){
        headerMenu.slideToggle()
        slider.toggleClass("mobile");
        sliderFormBtn.toggleClass("form-fillBtn-active");
        sliderMobileText.toggleClass("active")
        mainBlock.toggleClass("visibility");
        
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
        fwrdTitleSlide()
        sliderPrevBtnActive.src = (i==0) ?  "css/prevunactvprev.png" : "css/prevActvprev.png"
    });

    sliderPrevBtn.click(function() {
        owl.trigger('prev.owl.carousel');
        backTitleSlide()
        sliderPrevBtnActive.src = (i==0) ?  "css/prevunactvprev.png" : "css/prevActvprev.png" 
    });

    let i = 0;
    function fwrdTitleSlide(){
        sliderTitls[i].classList.remove('showTitle');
        i++;
        if(i>sliderTitls.length-1){
            i=0
        }
        sliderTitls[i].classList.add('showTitle')
    }
    function backTitleSlide(){
        sliderTitls[i].classList.remove('showTitle');
        i--;
        if(i<0){
            i=sliderTitls.length-1
        }
        sliderTitls[i].classList.add('showTitle')    
    }
}