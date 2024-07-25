export class UserOptions {

  public static userRoles:Array<any>=[
    //0th index 
    {
        "ADMIN":[
            {label:'Add Employee' ,link:'add-employee'},
            {label:'View Employees', link:'view-employee'},
            {label:'App Statistics', link:'statistics'} ],
        "CRM":[
            {label:'Add Enquiry', link:'add-enquiry'},
            {label:'View Enquiries', link:'view-enquiry'},
            {label:'Verified Enquiries',link:'verified-enquies'},
            {label:'Apply For Loan',link:'apply-loan'}],
        "OE":[
            {label:'Verification Request', link:'verification-request'},
            {label:'Verfy Loan Form' ,link:'view-loanform'}
        ]

    }



  ]  
}
