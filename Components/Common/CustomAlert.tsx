export type CustomAlertType = {
  alertMessage: string;
};

export default function CustomAlert({ alertMessage }: CustomAlertType) {
  return (
    <section className="my-6 block w-full">
      <div className="bg-primary flexCenter container rounded-md text-lg text-white">
        {alertMessage}
      </div>
    </section>
  );
}
