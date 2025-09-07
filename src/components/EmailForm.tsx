import { useTranslation } from "react-i18next";
import Input from "./core/Input";
import TextArea from "./core/TextArea";
import { Send } from "lucide-react";
import { useState } from "react";
import Toast from "./Toast";
import axios from "axios";

function EmailForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      },
    };
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setToastMessage(`${t("toast.success")}`);
      setToastType("success");
      setShowToast(true);
    } catch (error) {
      let message = `${t("toast.error_generic")}`;

      // Vérifie si c'est une erreur Axios
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Le serveur a répondu avec un statut hors 2xx
          message = `❌  ${t("toast.error")} ${error.response.status} : ${
            error.response.data?.message || `${t("toast.server_error")}`
          }`;
        } else if (error.request) {
          // La requête a été faite mais pas de réponse
          message = `❌ ${t("toast.no_response")}`;
        } else {
          // Autre erreur Axios
          message = `❌ ${t("toast.axios_error")} : ${error.message}`;
        }
      } else if (error instanceof Error) {
        // Autre type d'erreur JS
        message = `❌ ${t("toast.error")} : ${error.message}`;
      }

      setToastMessage(message);
      setToastType("error");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-6 mb-5">
        <Input
          type="text"
          value={name}
          className="w-[100%] md:w-[60%]"
          placeholder={`${t("formPlaceholders.name")}`}
          onChange={setName}
        />
        <Input
          type="email"
          value={email}
          className="w-[100%] md:w-[60%]"
          placeholder={`${t("formPlaceholders.email")}`}
          onChange={setEmail}
        />
      </div>
      <Input
        type="text"
        value={subject}
        className="w-[100%]"
        placeholder={`${t("formPlaceholders.subject")}`}
        onChange={setSubject}
      />
      <div className=" flex flex-col items-start w-[100%] mx-auto mt-6 md:mt-8">
        <TextArea
          onChange={setMessage}
          value={message}
          rows={6}
          placeholder={`${t("formPlaceholders.message")}`}
        />
        <button
          type="submit"
          className={`btn-with-icon-base bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? (
            `${t("sending")}`
          ) : (
            <div className="flex gap-2">
              <span>{`${t("send")}`}</span>
              <Send size={19} />
            </div>
          )}
        </button>
        <Toast
          message={toastMessage}
          type={toastType}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </form>
  );
}

export default EmailForm;

/*
Conception d’une application web en binôme permettant aux utilisateurs d’importer des fichiers CSV contenant des flux monétaires. L’application extrait automatiquement les données, les stocke dans une base de données relationnelle, et propose une interface utilisateur pour visualiser, filtrer et analyser les transactions financières
*/
