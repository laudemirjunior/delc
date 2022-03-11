context("Rendering test", () => {
  it("Test in login", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("[placeholder='Digite seu email']");
    cy.get("[placeholder='Digite sua senha']");
    cy.contains("Entrar").click();
  });
});

context("Login test", () => {
  it("Test in login", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("[placeholder='Digite seu email']").type("laudemir@gmail.com");
    cy.get("[placeholder='Digite sua senha']").type("laudemir");
    cy.get(".dark").click();
    cy.get("h3").contains("Ainda não há links encurtados em sua conta");
  });
  it("Test in LogOut", () => {
    cy.get(".loginRegister > [href='/'] > p").click();
    cy.get("h1").contains("Encurte seu URL");
  });
});

context("LogOut test", () => {
  it("Test in login", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("[placeholder='Digite seu email']").type("laudemir@gmail.com");
    cy.get("[placeholder='Digite sua senha']").type("laudemir");
    cy.get(".dark").click();
    cy.get("h3").contains("Ainda não há links encurtados em sua conta");
    cy.contains("Home").click();
    cy.get("h1").contains("Encurte seu URL");
  });
});

const newUrl = {
  url: "https://delc.herokuapp.com/iZZtp",
};

const newUrl2 = [
  {
    url: "https://www.youtube.com/",
    code: "iZZtp",
  },
];

context("Create one url", () => {
  it("Test in login", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/",
      },
      {
        statusCode: 200,
        body: newUrl,
      }
    );
    cy.intercept(
      {
        method: "GET",
        url: "/url/622b975994946fde28ecaffa",
      },
      {
        statusCode: 200,
        body: newUrl2,
      }
    );
    cy.intercept(
      {
        method: "DELETE",
        url: "/iZZtp/622b975994946fde28ecaffa",
      },
      {
        statusCode: 200,
        body: {},
      }
    );
    cy.visit("http://localhost:8080/login");
    cy.get("[placeholder='Digite seu email']").type("laudemir@gmail.com");
    cy.get("[placeholder='Digite sua senha']").type("laudemir");
    cy.get(".dark").click();
    cy.contains("Ainda não há links encurtados em sua conta");
    cy.contains("Home").click();
    cy.get("h1").contains("Encurte seu URL");
    cy.get("input").type("https://www.youtube.com/");
    cy.get(".search").click();
    cy.contains("https://delc.herokuapp.com/iZZtp");
    cy.contains("Painel de controle").click();
    cy.contains("youtube");
    cy.get("[data-cy='delete']").click();
    cy.contains("Ainda não há links encurtados em sua conta");
  });
});
