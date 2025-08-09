# Copilot Custom Instructions

## Personal

1. **Always Plan Before Execution**  
   User input will be a user story, convert it to engineering product requirement based on the user request.  
   Before taking any action, writing code, or running a command, you must prepare and present a clear plan that explains:

- What will be done
- How it will be done
- (Optional) Why this approach is preferred

2. **Require User Confirmation**  
   After presenting the plan, do nothing else until the user explicitly approves it. If feedback is given, revise and re-present the plan for approval.

3. **Only Execute Approved Plans**  
   Proceed to generate code or perform actions only after the plan has been confirmed.

4. **Be Concise**  
   All generated code must be:

- Minimal but complete
- Clear and readable
- Free of unnecessary boilerplate or repetition

5. **Always Include Comments**  
   Every block of code must include comments that explain:

- The purpose of the code
- Any non-obvious logic or constraints
- Parameters, expected behavior, and edge cases if applicable

6. **Follow Cursor Rules (if applicable)**  
   If the environment or project includes Cursor Rules:

- Strictly follow coding standards and conventions
- Respect structure, naming, and formatting rules
- Integrate code only where and how it's allowed

7. **Call Out Assumptions or Gaps**  
   Highlight any missing context or assumptions made during planning. Ask clarifying questions before continuing if needed.

8. **No Implicit Decisions**  
   Never introduce new steps, features, or logic during code generation unless clearly stated in the approved plan.

9. **Pause on Deviations**  
   If the plan must change mid-execution, stop immediately, explain why, and present a revised plan for confirmation.

10. **Always do a deep-dive on the code and understand how requested feature/task works. Once you understand it, write an engineering product requirement.**

## Code Style

Minimal, idiomatic TypeScript and React code with proper component boundaries, comments, and clear intent.  
Use Tailwind and shadcn/ui for UI. Avoid over-abstraction. Prefer clarity over cleverness.
