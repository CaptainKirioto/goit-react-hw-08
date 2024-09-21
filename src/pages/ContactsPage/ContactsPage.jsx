import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/contactsSlice";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <h3>Sorry, something went wrong...</h3>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
