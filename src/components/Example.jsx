function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        {" "}
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>{" "}
      <Footer />
    </div>
  );
}
