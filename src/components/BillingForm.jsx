export default function BillingForm({ person, setPerson }) {
  return (
    <>
      <form>
        <div>
          <label>
            First Name :<span> </span>
            <input
              value={person.firstName}
              onChange={(e) =>
                setPerson({ ...person, firstName: e.target.value.trim() })
              }
            />
          </label>
          <br />
          <label>
            Last Name : <span> </span>
            <input
              value={person.lastName}
              onChange={(e) =>
                setPerson({ ...person, lastName: e.target.value.trim() })
              }
            />
          </label>
          <br />
          <label>
            Address :<span> </span>
            <input
              value={person.address}
              onChange={(e) =>
                setPerson({ ...person, address: e.target.value.trim() })
              }
            />
          </label>
          <br />
          <label>
            City :<span> </span>
            <input
              value={person.city}
              onChange={(e) =>
                setPerson({ ...person, city: e.target.value.trim() })
              }
            />
          </label>
          <br />
          <label>
            State :<span> </span>
            <input
              value={person.state}
              onChange={(e) =>
                setPerson({ ...person, state: e.target.value.trim() })
              }
            />
          </label>
          <br />
          <label>
            Postal Code :<span> </span>
            <input
              value={person.postalCode}
              onChange={
                (e) =>
                  setPerson({ ...person, postalCode: e.target.value.trim() }) //why inside{}
              }
            />
          </label>
          <br />
        </div>
      </form>
    </>
  );
}
