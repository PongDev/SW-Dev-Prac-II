export default function AddHospitalFormInput({
  id,
  name,
  text,
}: {
  id: string;
  name: string;
  text: string;
}) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} name={name} type="text" className="rounded" />
    </>
  );
}
