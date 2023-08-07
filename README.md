# Book Search Prototype

A website for finding books using information from their reviews.

## How does the search work?

Data about the books, including reviews, is from [this dataset](https://mengtingwan.github.io/data/goodreads.html) (data from 2017).

For every book, all reviews are evaluated by the `all-MiniLM-L6-v2` model to get an embedding (384 dimensions). These are stored in the database as vectors. When the user enters a search this is evaluated by the same model and the top 1000 closest reviews are queried from the vector database. Each review is given a score of `1 - cosine distance` and the 5 books with the highest cumulative score are returned to the user. 

The prototype is limited to the top 1000 most reviewed books in the dataset, using 100 randomly selected reviews for each book.

## Stack

The site is built using Svelte, skeleton and tailwind. It uses a postgres database (with the pgvector extension) hosted on neon. The inference model is hosted on huggingface, though the cold start times are pretty bad so I am planning on moving it to a VPS. 

The data is preprocessed using Jupyter notebooks running the model locally using the sentence transformers library.

