import supertest from "supertest";
import app from "../../..";

function randomizador(n:number){
    let email:string = ''
    while(email.length < n){
        email += (Math.random().toString(36).slice(2,11));
    }
    return email.slice(0,n);
}

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "alo",
                email: `${randomizador(24)}@email.com`,
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            })
    
            expect(response.status).toBe(201)  
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "alo",
                email: `${randomizador(24)}@email.com`,
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            })
            
            expect(response.body).toEqual(expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
                apresentacao: expect.any(String),
                bairro: expect.any(String),
                updatedAt: expect.any(String),
                createdAt: expect.any(String),
            }))
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/psicologos')
            .send({
                nome: "alo",
                email: `${randomizador(24)}@email.com`,
                senha: "123",
                apresentacao: "bla bla bla",
                cep: "01001000"
            })
            
            expect(response.body).toEqual(
                expect.objectContaining({
                    nome: "alo",
                    email: "nataliaAlo8@gmail.com",
                    apresentacao: "bla bla bla",
                })
            )

        })

        
    })
})