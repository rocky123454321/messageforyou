import personalMessages from "../data/personalMessage";

export default function getMessage(lastName) {
  if (!lastName) return "";

  const name =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return personalMessages[name] || "No message for this name";
}
