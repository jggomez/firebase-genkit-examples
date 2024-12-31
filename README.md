# Firebase Genkit Examples

This repository provides a collection of practical examples showcasing the versatility of Firebase Genkit for building generative AI applications.  Genkit simplifies the development and deployment of AI-powered features by offering a comprehensive suite of tools and libraries.

**Explore these examples to discover what you can build with Genkit:**

## Text Prompt Examples

* **Basic Text Generation:**  Generate diverse creative text formats (e.g., poems, code, scripts, musical pieces, emails, letters) using straightforward text prompts.
    * **Example:**  Generate a short story about a dog who travels through time.
* **Prompt Engineering:**  Learn advanced techniques to craft effective prompts and achieve precise control over generated outputs.
    * **Example:**  Generate different creative text formats with the same base prompt, but modify parameters to control length, style, and tone.
* **Chatbot:**  Build an interactive chatbot capable of engaging in natural-sounding conversations.
    * **Example:**  Create a customer support chatbot that can answer questions about your products or services, and handle basic troubleshooting.


## Multimodal Input Examples

* **Image Generation from Text:** Generate images from detailed text descriptions using powerful image generation models.
    * **Example:**  Create an application that generates images of fantasy creatures based on user-provided textual descriptions.

## Schema Input and Output Examples

* **Structured Data Generation:** Define schemas to generate structured data formats like JSON or XML with specific fields and data types.
    * **Example:** Generate product descriptions in JSON format with fields for name, price, features, and customer reviews.

## Structured Output Examples

* **Data Extraction:** Extract structured information like names, dates, and locations from unstructured text.
    * **Example:**  Extract key details from news articles or research papers to create summaries or knowledge graphs.

## Flows Examples

* **Sequential Processing:** Chain multiple Genkit tools together to create complex workflows.
    * **Example:**  Build a flow that generates a poem, translates it into multiple languages, and then generates corresponding images for each translation.
* **Conditional Logic:**  Implement conditional logic within flows to control the execution of tools based on specific conditions.
    * **Example:**  Create a flow that generates different types of responses based on user sentiment or input keywords.
* **Error Handling:**  Implement robust error handling mechanisms within flows to gracefully manage unexpected errors.
    * **Example:**  Create a flow that retries failed tool executions or provides alternative outputs in case of errors.


## RAG Examples

* **Retrieval-Augmented Generation:**  Integrate external knowledge sources into your Genkit applications to generate contextually relevant and informative responses.
    * **Example:**  Build a chatbot that can answer questions about historical events by retrieving information from a Wikipedia-like knowledge base.
* **Custom Indexers and Retrievers:**  Implement custom indexers and retrievers to connect to your specific data sources.
    * **Example:**  Create a custom indexer to index your company's internal documents and use a retriever to access this information for generating reports or summaries.
* **Reranking and Two-Stage Retrieval:**  Implement advanced retrieval techniques to improve the accuracy and relevance of retrieved information.
    * **Example:**  Use a reranker to prioritize the most relevant documents from a large set of retrieved results, ensuring the generated responses are focused and accurate.


This repository is actively maintained and updated with new examples and use cases. Contributions are welcome!

Made with ❤ by  [jggomez](https://devhack.co).

[![Twitter Badge](https://img.shields.io/badge/-@jggomezt-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/jggomezt)](https://twitter.com/jggomezt)
[![Linkedin Badge](https://img.shields.io/badge/-jggomezt-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jggomezt/)](https://www.linkedin.com/in/jggomezt/)
[![Medium Badge](https://img.shields.io/badge/-@jggomezt-03a57a?style=flat-square&labelColor=000000&logo=Medium&link=https://medium.com/@jggomezt)](https://medium.com/@jggomezt)

## License

    Copyright 2025 Juan Guillermo Gómez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
