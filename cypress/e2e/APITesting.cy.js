/// <reference types = "Cypress" />

describe('API Testing fucntionality',function(){

    it('GET API Test', function() {
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal('Lindsay')
        })
    })

    it('POST API Test', function() {
        var user = 
        {
            "name": "John",
            "job": "QA Test"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
        //PUT Request
            var user1 = 
            {
                "name": "Doe",
                "job": "Developer"
            }
            cy.request('PUT','https://reqres.in/api/users/2',user1).then((response)=>{
                expect(response.status).equal(200)
                expect(response.body.name).equal(user1.name)
                expect(response.body.job).equal(user1.job)
                expect(response.body.name).not.equal(user.name)
                expect(response.body.job).not.equal(user.job)
            })
        })
        it('Delete API Test', function() {
            cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
                expect(response.status).equal(204)
                expect(response.body).empty
            })
        })

 
})



