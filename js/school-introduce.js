/**
 *@Author:Administrator
 *@Date:
 *
 */


;(function () {
    var aLi = $('.introduce-nav >ul >li');
    var aBox = $('.box-container >.nav-right');
    aLi.click(function (e) {
        let _this = $(this).index();
        $(this).addClass('isActive').siblings().removeClass('isActive');
        aBox.eq(_this).addClass('isBoxactive').siblings('div').removeClass('isBoxactive');
    })
})()


