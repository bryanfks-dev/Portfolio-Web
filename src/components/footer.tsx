export default function Footer() {
  const data = {
    createdOn: new Date('2025-12-27'),
    author: 'Bryan Fernando Kurniawan Suhartono',
  };

  return (
    <footer className="mx-8 my-16 mb-24 text-center md:mx-28 md:my-16 md:text-left lg:mx-72">
      <p>
        © {data.createdOn.getFullYear()} {data.author}
      </p>
    </footer>
  );
}
