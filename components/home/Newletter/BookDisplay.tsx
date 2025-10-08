"use client";
import React from "react";
import Image from "next/image";

interface Book {
  id: number;
  name: string;
  image: string;
  link: string;
}

const books: Book[] = [
  {
    id: 1,
    name: "Pitra Tumhe Pukarte Hai",
    image: "/Pitra-Book-Front.png",
    link: "https://paravidya.org/books/pitra-tumhe-pukarte-hai",
  },
  {
    id: 2,
    name: "Jyotish: The Science of Soul and Karmic Mathematics",
    image: "/Jyotish-book-Front.png",
    link: "https://paravidya.org/books/jyotish-science-of-soul",
  },
];

const BookDisplay: React.FC = () => {
  return (
    <>
      <section className="bookdisplayline">
        {books.map((book) => (
          <div key={book.id} className="bookcarddisplay">
            <div className="bookImageWrapper">
              <Image
                src={book.image}
                alt={`${book.name} - Paravidya Foundation`}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="bookImage"
                priority={book.id === 1}
              />
            </div>

            <h1>{book.name}</h1>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              Read More
              <Image
                src="/bookarrow.png"
                alt="arrow icon"
                width={16}
                height={16}
              />
            </a>
          </div>
        ))}
      </section>

      <style jsx>{`
        /* Grid layout */
        .bookdisplayline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 3rem;
        }

        /* Card */
        .bookcarddisplay {
          position: relative;
          transition: all 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Image container */
        .bookImageWrapper {
          position: relative;
          width: 18rem;
          height: 24rem;
          margin-bottom: 1rem;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
        }

        /* Next.js image */
        .bookImage {
          object-fit: contain;
          transition: transform 0.5s ease-in-out;
        }

        /* Subtle hover zoom */
        .bookcarddisplay:hover .bookImage {
          transform: scale(1.03);
        }

        /* Title */
        .bookcarddisplay h1 {
          margin-top: 1rem;
          font-size: 1.75rem;
          color: #0b0c25;
          text-align: center;
          font-weight: 600;
        }

        /* Link */
        .bookcarddisplay a {
          color: #ffb400;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: underline;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5rem;
          gap: 0.3rem;
          transition: color 0.3s ease;
        }

        .bookcarddisplay a:hover {
          color: #ffcf70;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .bookdisplayline {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem 1rem;
          }

          .bookImageWrapper {
            width: 14rem;
            height: 19rem;
          }

          .bookcarddisplay h1 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(BookDisplay);
