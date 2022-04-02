import Landing from "modules/landing";

import { contactController } from "controllers/contact.controller";

export default function App({ contacts }) {
  return <Landing contacts={contacts} />;
}

export const getServerSideProps = async (pageContext) => {
  const contacts = (await contactController.getAll()) || [];

  return {
    props: {
      contacts: JSON.parse(JSON.stringify(contacts)),
    },
  };
};
