import { Component, Input } from "@angular/core";

@Component({

    selector: 'bank-account',
    template: `

        Bank Name: {{bankName}}
        Account Id: {{id}}

    `
})

export class BankAccount {

    @Input() bankName: string | undefined;
    @Input('account-id') id: string | undefined;

}


@Component({

    selector: 'app11',
    template: `

            <bank-account bankName="RBC" account-id="4747"></bank-account>
        `
})

export class App{}
