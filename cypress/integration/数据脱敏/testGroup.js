context('指定测试用例运行的栗子', function () {

    it('[smoke] 登录用例1', function () {
        cy.log('登录成功')
    });

    it('[e2e,smoke] 登录用例1', function () {
        cy.log('登录成功')
    });

})