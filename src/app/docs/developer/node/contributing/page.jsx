import Link from "next/link"

export default function ContributingPage() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-dark-border bg-dark-surface/70 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white">Contributing Guide</h1>
        <p className="mt-3 leading-7 text-gray-300">
          Thank you for your interest in contributing to epress node. This guide
          covers the development workflow and standards.
        </p>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Development Setup</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>Fork the repository on GitHub</li>
          <li>
            Clone your fork:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              git clone https://github.com/YOUR_USERNAME/epress.git
            </code>
          </li>
          <li>
            Install dependencies:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              npm install
            </code>
          </li>
          <li>Set up your database (SQLite is easiest for development)</li>
          <li>
            Run migrations:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              npm run migrate
            </code>
          </li>
          <li>
            Start development server:{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              npm run dev
            </code>
          </li>
        </ol>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Branch Workflow</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            <span className="text-white">main:</span> Production-ready code. All
            PRs merge here.
          </li>
          <li>
            <span className="text-white">feature/*:</span> New features. Branch
            from main.
          </li>
          <li>
            <span className="text-white">fix/*:</span> Bug fixes. Branch from
            main.
          </li>
          <li>
            <span className="text-white">docs/*:</span> Documentation changes.
            Branch from main.
          </li>
        </ul>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary text-sm">
          <code>{`git checkout main\ngit pull origin main\ngit checkout -b feature/my-new-feature`}</code>
        </pre>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Code Standards</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              Linting with Biome
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We use Biome for linting and formatting. Run before every commit:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-3 text-primary text-sm">
              <code>{`npm run lint        # Check for issues\nnpm run lint:fix    # Auto-fix issues`}</code>
            </pre>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              JavaScript Style
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>ES Modules (.mjs extension for server code)</li>
              <li>ESM import/export syntax</li>
              <li>Arrow functions for callbacks</li>
              <li>Prefer const, use let only when reassignment needed</li>
              <li>Descriptive variable and function names</li>
            </ul>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-bg/60 p-4">
            <h3 className="text-sm font-semibold text-white">
              React/JSX Style
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>Functional components with arrow functions</li>
              <li>Hooks for state and side effects</li>
              <li>Kebeb-case file names for components</li>
              <li>Named exports for utilities, default for components</li>
            </ul>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Testing</h2>
        <p className="mt-2 text-gray-300">
          All new features and bug fixes should include tests:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary text-sm">
          <code>{`npm run test                 # Run all tests\nnpm run test -- path/to/test  # Run specific test file`}</code>
        </pre>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
          <li>
            Test files use{" "}
            <code className="rounded bg-dark-bg px-1.5 py-0.5 text-primary">
              .test.mjs
            </code>{" "}
            extension
          </li>
          <li>We use AVA test framework</li>
          <li>Tests run against SQLite by default</li>
          <li>Aim for meaningful coverage, not 100%</li>
        </ul>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Commit Messages</h2>
        <p className="mt-2 text-gray-300">Follow conventional commit format:</p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-dark-border bg-dark-bg p-4 text-primary text-sm">
          <code>{`type(scope): subject

[optional body]

[optional footer]`}</code>
        </pre>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-white">Types</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-300">
              <li>
                <code className="text-primary">feat</code>: New feature
              </li>
              <li>
                <code className="text-primary">fix</code>: Bug fix
              </li>
              <li>
                <code className="text-primary">docs</code>: Documentation
              </li>
              <li>
                <code className="text-primary">refactor</code>: Code refactoring
              </li>
              <li>
                <code className="text-primary">test</code>: Adding tests
              </li>
              <li>
                <code className="text-primary">chore</code>: Maintenance
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Examples</h3>
            <pre className="mt-2 overflow-x-auto text-sm text-gray-300">
              <code>{`feat(api): add pagination to publications\nfix(auth): correct JWT expiration check\ndocs(readme): update installation steps`}</code>
            </pre>
          </div>
        </div>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">
          Pull Request Process
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-300">
          <li>Ensure your branch is up to date with main</li>
          <li>Run lint and tests locally</li>
          <li>Push your branch to your fork</li>
          <li>Open a PR against the main repository main branch</li>
          <li>Fill out the PR template completely</li>
          <li>Wait for review and address feedback</li>
          <li>Maintainers will merge approved PRs</li>
        </ol>
      </article>

      <article className="rounded-xl border border-dark-border bg-dark-surface/70 p-6">
        <h2 className="text-xl font-semibold text-white">Questions?</h2>
        <p className="mt-2 text-gray-300">
          Open a discussion on GitHub or ask in the community channels. We are
          happy to help new contributors get started.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/epressworld/epress/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open GitHub Discussions
          </a>
        </div>
      </article>

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/developer/node/setup" className="btn-primary">
          Dev Setup
        </Link>
        <Link
          href="/docs/developer/node/architecture"
          className="btn-secondary"
        >
          Architecture
        </Link>
      </div>
    </div>
  )
}
