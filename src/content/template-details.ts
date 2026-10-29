/**
 * Editable starter content for each website direction.
 * Replace these examples with approved client copy before launch.
 */
export const templateDetails = {
  company: {
    subtitle: "A clear introduction to your business",
    intro: "Explain who you are, who you help, and what makes your work valuable.",
    sections: [
      { title: "What we do", text: "Describe your main services or products in plain language." },
      { title: "Why work with us", text: "Share your experience, approach, values, or proof that builds trust." },
      { title: "How to get started", text: "Tell visitors what happens when they contact your team." },
    ],
    action: "Talk to our team",
    actionNote: "Replace this sample call to action with your real contact or enquiry link.",
  },
  landing: {
    subtitle: "One offer. One audience. One next step.",
    intro: "Lead with the result your audience wants and make the next action easy to understand.",
    sections: [
      { title: "The challenge", text: "Describe the audience's need and why it matters now." },
      { title: "The offer", text: "Explain what is included, who it is for, and its main benefit." },
      { title: "Take the next step", text: "Answer the most important question and invite visitors to act." },
    ],
    action: "Explore the offer",
    actionNote: "Connect this button to the campaign's real form, checkout, or contact channel.",
  },
  trekking: {
    subtitle: "Make the adventure clear before the journey begins",
    intro: "Help guests understand the experience, difficulty, duration, inclusions, and preparation.",
    sections: [
      { title: "The experience", text: "Describe the landscape, highlights, local stories, and what guests will do." },
      { title: "Trip details", text: "Add duration, meeting point, difficulty, group size, inclusions, and exclusions." },
      { title: "Safety and preparation", text: "Explain equipment, fitness needs, weather considerations, and guide support." },
    ],
    action: "Ask about this trip",
    actionNote: "Use a verified booking or enquiry contact. Never publish unconfirmed trip details.",
  },
  store: {
    subtitle: "Show the product and make ordering simple",
    intro: "Present what you sell, who it is for, and how customers can ask about availability or order.",
    sections: [
      { title: "Featured products", text: "Add product photos, names, prices, sizes, and availability where confirmed." },
      { title: "About the brand", text: "Share the maker, sourcing, materials, or story behind the collection." },
      { title: "Ordering and delivery", text: "Explain payment, shipping or pickup, returns, and how customers contact you." },
    ],
    action: "Ask about a product",
    actionNote: "This starter is not a shopping cart or payment system. Connect a verified ordering channel.",
  },
  blog: {
    subtitle: "A home for useful stories and updates",
    intro: "Organize articles around the questions, interests, and stories your readers care about.",
    sections: [
      { title: "Latest stories", text: "Feature recent articles with clear titles, summaries, and publication dates." },
      { title: "Topics and categories", text: "Group articles into a small set of helpful, understandable topics." },
      { title: "About this journal", text: "Explain the publication's focus, contributors, and editorial approach." },
    ],
    action: "Explore the stories",
    actionNote: "Article listing and CMS features are future development tasks, not included in this starter.",
  },
} as const;
