interface nextStep {
    nextStep: () => void ;
};
function PersonalInfoForm({ nextStep }: nextStep) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="e.g Stephen King" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="e.g +1 234 567 890" />
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default PersonalInfoForm;
