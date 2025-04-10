<!-- src/lib/components/ContactForm.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  
  // Props
  export let formId: string;
  export let fallback: {
    namePlaceholder: string;
    emailPlaceholder: string;
    reasonLabel: string;
    reasonOptions: {
      reflection: string;
      question: string;
      feedback: string;
      suggestion: string;
      other: string;
    };
    messagePlaceholder: string;
    submit: string;
    successMessage: string;
    errorMessage: string;
  };
  
  // Form state
  let formState: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  let honeypot = '';
  
  // Form values
  let name = '';
  let email = '';
  let reason = 'reflection';
  let message = '';
  
  // Get translations
  $: t = getTranslation($langStore, 'contact');
  
  // Use translations if available, otherwise use fallback
  $: namePlaceholder = t?.namePlaceholder || fallback.namePlaceholder;
  $: emailPlaceholder = t?.emailPlaceholder || fallback.emailPlaceholder;
  $: reasonLabel = t?.reasonLabel || fallback.reasonLabel;
  $: reasonOptions = t?.reasonOptions || fallback.reasonOptions;
  $: messagePlaceholder = t?.messagePlaceholder || fallback.messagePlaceholder;
  $: submitText = t?.submit || fallback.submit;
  $: successMessage = t?.successMessage || fallback.successMessage;
  $: errorMessage = t?.errorMessage || fallback.errorMessage;
  
  // Form submission handler
  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    // Honeypot check (anti-spam)
    if (honeypot) {
      console.log('Honeypot triggered');
      return;
    }
    
    formState = 'submitting';
    
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        formState = 'success';
        // Reset form
        name = '';
        email = '';
        reason = 'reflection';
        message = '';
      } else {
        formState = 'error';
        console.error('Form submission failed:', await response.text());
      }
    } catch (error) {
      formState = 'error';
      console.error('Form submission error:', error);
    }
  }
  
  // Auto-resize text area as user types
  let messageArea: HTMLTextAreaElement;
  
  function resizeTextarea() {
    if (messageArea) {
      messageArea.style.height = 'auto';
      messageArea.style.height = messageArea.scrollHeight + 'px';
    }
  }
  
  onMount(() => {
    if (messageArea) {
      resizeTextarea();
    }
  });
</script>

<div class="w-full max-w-xl mx-auto">
  {#if formState === 'success'}
    <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-6 rounded-xl text-green-800 dark:text-green-200 text-center space-y-4 animate-float">
      <div class="text-3xl">✨</div>
      <p>{successMessage}</p>
    </div>
  {:else if formState === 'error'}
    <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-6 rounded-xl text-red-800 dark:text-red-200 text-center space-y-4">
      <div class="text-3xl">🌌</div>
      <p>{errorMessage}</p>
      <button 
        class="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
        on:click={() => formState = 'idle'}
      >
        Try again
      </button>
    </div>
  {:else}
    <form 
      on:submit={handleSubmit} 
      class="space-y-6 bg-white/80 dark:bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-100 dark:border-indigo-800 shadow-md"
    >
      <!-- Honeypot field (anti-spam) -->
      <div class="hidden">
        <input
          type="text"
          name="_gotcha"
          bind:value={honeypot}
          tabindex="-1"
          autocomplete="off"
        />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name field -->
        <div class="space-y-2">
          <input
            type="text"
            name="name"
            id="name"
            bind:value={name}
            placeholder={namePlaceholder}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition"
          />
        </div>
        
        <!-- Email field -->
        <div class="space-y-2">
          <input
            type="email"
            name="email"
            id="email"
            bind:value={email}
            placeholder={emailPlaceholder}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition"
          />
        </div>
      </div>
      
      <!-- Reason field -->
      <div class="space-y-2">
        <label for="reason" class="block text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {reasonLabel}
        </label>
        <select
          name="reason"
          id="reason"
          bind:value={reason}
          class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition"
        >
          <option value="reflection">{reasonOptions.reflection}</option>
          <option value="question">{reasonOptions.question}</option>
          <option value="feedback">{reasonOptions.feedback}</option>
          <option value="suggestion">{reasonOptions.suggestion}</option>
          <option value="other">{reasonOptions.other}</option>
        </select>
      </div>
      
      <!-- Message field -->
      <div class="space-y-2">
        <textarea
          name="message"
          id="message"
          bind:value={message}
          bind:this={messageArea}
          on:input={resizeTextarea}
          placeholder={messagePlaceholder}
          required
          rows="5"
          class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-indigo-200 dark:border-indigo-800 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition resize-none min-h-[120px]"
        ></textarea>
      </div>
      
      <!-- Submit button -->
      <div class="flex justify-center pt-4">
        <button
          type="submit"
          disabled={formState === 'submitting'}
          class="inline-block px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base
            shadow-lg hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-wait"
        >
          {formState === 'submitting' ? '...' : submitText}
        </button>
      </div>
    </form>
  {/if}
</div>
