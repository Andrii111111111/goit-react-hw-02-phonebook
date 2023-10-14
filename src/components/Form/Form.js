export const Form = ({ hanSub, hanChe }) => {
  return (
    <div>
      <form onSubmit={hanSub}>
        <h2>Name</h2>
        <input type="text" name="name" onChange={hanChe} required />
        <h2>Number</h2>
        <input type="tel" name="number" onChange={hanChe} required />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
