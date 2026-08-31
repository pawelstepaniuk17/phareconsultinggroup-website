# Copy repositioning — Mosaic Conseil

## Why

Every competitor site the user listed sells a version of the same story:

- JHC: "review before commitment, written, signed, kept on file, dissenting read before signature"
- Blue Oak: "test whether the financial case holds, force downside, second opinion"
- Bavarian Capital: "big calls, in the room with no stake"
- Braun: "outside perspective on problems you already know exist"
- Gulf Associates: "the commercial call that cannot be made from a head office"
- Olive Tree: "make management easier to hold"

Our current site uses their exact register: **second reading, reading room, the file, dossier, the room, before the meeting where it will be signed, pre-mortem, counter-model, quiet call, evidence over narrative, first reader.** JHC is a near-carbon-copy of our positioning. This must go.

## New positioning: "The Rebuild"

Mosaic doesn't review a decision, doesn't attend the meeting, doesn't sign off. Mosaic takes one artifact — a plan, a model, a forecast, a pricing sheet — and rebuilds it from scratch, alone. Returned once. No follow-up.

The metaphor is a workshop rebuilding a broken instrument, not a reader with a red pen.

## Vocabulary swaps (site-wide find & replace, then hand-edit headlines)

| Retire                                          | Replace with                          |
| ----------------------------------------------- | ------------------------------------- |
| second reading                                  | the rebuild                           |
| reading room / the room                         | the workshop / the bench              |
| read a decision / read the plan again           | rebuild the plan / rewrite the model  |
| the file / the dossier                          | the rebuild / the worksheet           |
| before the meeting where it will be signed      | before you commit the quarter         |
| pre-mortem                                      | the failure sheet                     |
| counter-model                                   | the inverse model                     |
| quiet call                                      | the missing call                      |
| first reader                                    | (drop entirely)                       |
| evidence over narrative                         | arithmetic over persuasion            |
| send the draft                                  | send the plan                         |

Also purged: "boardroom-tested", "principal", "chair", "signature", "commissioned memorandum", "consequential", "written and signed", any "before/after" formulations that echo JHC.

## Anti-AI style rules (enforced during rewrite)

- No tricolons ("clear, concrete, and honest")
- No "we don't X — we Y" contrast constructions
- No abstract virtue nouns paired ("clarity, rigor, discipline")
- Concrete units where a claim is made (a number, a week, a line item)
- Sentences of uneven length; occasional single-word sentence
- No em dashes, no semicolons in body copy
- Normal caps only (already a rule)

## Files touched

Marketing copy only — no logic, no design tokens.

- `src/components/mosaic/`: Hero, About, Services, Approach, Industries, Insights, Contact, Footer, Header (nav labels)
- `src/pages/`: About, Approach, Services, Industries, Insights, ServiceDetail, InsightDetail
- `src/content/`: services.ts, insights.ts
- Memory: update `mem://brand/identity` and `mem://content/writing-rules` to reflect the new metaphor and forbidden vocabulary, remove the "second reading" references from the index.

## Out of scope

- Design, layout, color, imagery
- Navigation structure, routes
- Legal pages (kept literal for compliance)
- Contact details (unchanged)

## Deliverable

A site whose copy no phrase-matches any of the ten competitor URLs, and whose voice reads as a workshop that rebuilds artifacts, not a reader who countersigns decisions.
