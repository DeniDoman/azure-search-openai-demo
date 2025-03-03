import React from "react";

describe("<QuestionInput />", () => {
    it("renders", () => {
        cy.intercept("GET", "/auth_setup", {
            statusCode: 200,
            body: {
                useLogin: false,
                requireAccessControl: false,
                enableUnauthenticatedAccess: true,
                msalConfig: {
                    auth: {
                        clientId: "fake",
                        authority: "https://login.microsoftonline.com/common",
                        redirectUri: "/",
                        postLogoutRedirectUri: "/",
                        navigateToLoginRequestUrl: false
                    },
                    cache: {
                        cacheLocation: "sessionStorage",
                        storeAuthStateInCookie: false
                    }
                },
                loginRequest: { scopes: [] },
                tokenRequest: { scopes: [] }
            }
        }).as("authSetup");

        cy.intercept("GET", "/.auth/me", {
            statusCode: 200,
            body: []
        }).as("authMe");

        cy.then(async () => {
            const { QuestionInput } = await import("./QuestionInput");

            cy.mount(<QuestionInput onSend={question => cy.log("Question submitted:", question)} disabled={false} />);
        });
    });
});
