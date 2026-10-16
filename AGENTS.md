<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this portfolio as one scrolling React page in the existing TanStack Start/Vite app; the user requested a single-page experience and the platform router must remain intact.
- Use CDN asset pointers for the supplied portrait and résumé to keep uploaded media out of source control.
- Deliver contact messages through browser-side EmailJS only when its public configuration is supplied; otherwise offer an honest mail-app fallback without claiming delivery.
- Keep portfolio typography and breakpoint adaptations in the shared stylesheet, with semantic color tokens; this maintains consistent readability across the single scrolling page.
