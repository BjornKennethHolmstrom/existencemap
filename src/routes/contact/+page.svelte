<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  
  $: lang = $langStore;
  $: t = getTranslation(lang, 'contact');
  $: tCommon = getTranslation(lang, 'common');
  
  // Fallback text in case translations aren't set up yet
  const fallback = {
    title: "Share Your Journey",
    subtitle: "A space for connection, reflection, and shared exploration",
    introduction: "This map is not complete without your voice. Whether you've had insights sparked by these pages, questions that linger, or contributions to offer—this is a space where our paths can intersect.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    reasonLabel: "Nature of your message",
    reasonOptions: {
      reflection: "Personal reflection",
      question: "Question or curiosity",
      feedback: "Feedback on the map",
      suggestion: "Suggestion or contribution",
      other: "Something else entirely"
    },
    messagePlaceholder: "Share your thoughts, questions, or reflections...",
    submit: "Send forth",
    successMessage: "Message received with gratitude. I'll respond when the stars align (usually within a few days).",
    errorMessage: "Something in the cosmic web went awry. Please try again or reach out directly.",
    quote: "Every genuine question creates a space where truth can breathe."
  };
  
  // Use translations if available, otherwise use fallback
  $: title = t?.title || fallback.title;
  $: subtitle = t?.subtitle || fallback.subtitle;
  $: introduction = t?.introduction || fallback.introduction;
  $: quote = t?.quote || fallback.quote;
</script>

<svelte:head>
  <title>{title} - Existence Map</title>
  <meta name="description" content="Connect with Existence Map - share your reflections, questions, and insights about consciousness, reality, and mystery." />
</svelte:head>

<MysticSection className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
  <MysticLogo />

  <h1 class="text-4xl font-display font-bold text-center mb-4">{title}</h1>
  
  <p class="text-center text-lg text-indigo-600 dark:text-indigo-400 mb-10">
    {subtitle}
  </p>
  
  <div class="prose dark:prose-invert prose-indigo mx-auto mb-12">
    <p>{introduction}</p>
    
    <blockquote class="italic text-indigo-700 dark:text-indigo-300">
      {quote}
    </blockquote>
  </div>
  
  <ContactForm formId="xrbpryky" {fallback} />
</MysticSection>
