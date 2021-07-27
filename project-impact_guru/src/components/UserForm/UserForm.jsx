import styles from "./UserForm.module.css";
import { BasicDetails } from "../BasicDetails";
import { BeneficiaryDetails } from "../BeneficiaryDetails";
import { FundraiserDetails } from "../FundraiserDetails";
import { Submit } from "../Submit";
import { Expand } from "../Accordion";
import { useForm, useStep } from "react-hooks-helper";

const initial = {
  tax: "TAX BENIFITS",
  Emergency: "URGENT",
  backgroundImage:
    "https://images.unsplash.com/photo-1605722558200-b83d78c255a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  typeOfEmergency:
    "https://i.pinimg.com/originals/37/19/ec/3719eceb9a3562487051c17741aad593.png",
  sharedPerson: "",
  typeOfneed: "",
  description: "",
  raisedFund: 0,
  coverdfund: "0%",
  email: "",
  mob: "",
  loan: "",
  religious: "",
  city: "",
  goal: 0,
};

const steps = [
  { id: "Basic Information" },
  { id: "Beneficiary Information" },
  { id: "Fundraiser Details" },
  { id: "Submit" },
];


export function UserForm() {
  const [data, setData] = useForm(initial);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { data, setData, navigation };

  switch (step.id) {
    case "Basic Information":
      return (
        <div className={styles.cards}>
          <div>
            <p>Start a Fundraiser</p>
            <BasicDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Beneficiary Information":
      return (
        <div className={styles.cards}>
          <div>
            <p>Beneficiary Details</p>
            <BeneficiaryDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Fundraiser Details":
      return (
        <div className={styles.cards}>
          <div>
            <p>Fundraiser Details</p>
            <FundraiserDetails {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    case "Submit":
      return (
        <div className={styles.cards}>
          <div>
            <Submit {...props} />
          </div>
          <div className={styles.accordion}>
            <Expand />
          </div>
        </div>
      );

    default:
      return (
        <img
          src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"
          alt=""
        />
      );
  }
}
