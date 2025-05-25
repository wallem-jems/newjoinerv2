import { useState } from "react";
import "./Apps.css";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

export default function ActiveDirectory({ employee }) {
  let additionalApps = "";
  const { copyToClipboard, isVisible } = useClipboard();
  const [defaultApp, setDefaultApp] = useState(
    `AAD_Sync;Okta_Agent_Contact_Users;Okta_Citrix_${employee.selectedCountry}_Users;Okta_Concur_${employee.selectedCountry}_Users;Okta_Concur_${employee.selectedCountry}_Users;Okta_corp_philanthropy_Prod_Users;Okta_Coruson_Prod_Users;Okta_Dashlane_${employee.selectedCountry}_Users;Okta_Data_Asset_Register_Prod;Okta_GiftsAndHospitality_Prod_Users;Okta_Ideation_Portal_Users;Okta_Intranet_${employee.selectedCountry}_Users;Okta_K2PROD_Users;Okta_Litmos_${employee.selectedCountry}_Users;Okta_ME_Users;Okta_OnshoreEvent_Users;Okta_Percipio_${employee.selectedCountry}_Users;Okta_SwireConnect_${employee.selectedCountry}_Users;Okta_VIrtualGratitude_${employee.selectedCountry}_Users;Okta_Zendesk_SS_KB_Prod_Users;Okta_Zoom_CNCO;Okta_Intellect_Users;`
  );
  if (employee.selectedCountry === "SG") {
    additionalApps =
      "Okta_Condeco_Prod;Okta_Ramco_Prod_Users;Okta_OnshoreSafety_Prod_Users;Okta_MediusFlow_users;";
  } else if (employee.selectedCountry === "IN") {
    additionalApps = "Okta_Ramco_Prod_Users;";
  } else if (employee.selectedCountry === "NZ") {
    additionalApps = "Okta_Ricoh_NZ_Users";
  }
  const copyAD = `Fullname: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.email}\nADID: ${employee.adid}\nPassword: ${employee.password}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nAddress: ${employee.address}\nCity: ${employee.selectedCity}\nZip Code: ${employee.zipCode}\nCountry: ${employee.country}\n\nCopy the below AD Groups to the "Member of" tab\n\n${defaultApp}${additionalApps}`;

  return (
    <>
      <div className="copy-panel">
        {copyAD.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyAD.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button
          className="copy-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent toggle collapse
            copyToClipboard(copyAD);
          }}
        >
          COPY
        </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </>
  );
}
