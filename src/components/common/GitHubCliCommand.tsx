import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

export function GitHubCliCommand() {
  const [copied, setCopied] = useState(false)
  const command = 'gh repo create my-citrea-app --template uratmangun/citrea-boilerplate --public --clone'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="mt-6 space-y-3">
      <div className="flex items-center gap-2 text-sm text-amber-800">
        <Terminal className="h-4 w-4" />
        <span className="font-medium">Create your project from this template:</span>
      </div>
      
      <div className="relative">
        <div className="flex items-center bg-amber-900/10 border border-amber-200 rounded-lg p-3 pr-12">
          <code className="text-sm font-mono text-amber-900 flex-1 break-all">
            {command}
          </code>
          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-amber-100 transition-colors"
            title={copied ? 'Copied!' : 'Copy command'}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-amber-600" />
            )}
          </button>
        </div>
        
        {copied && (
          <div className="absolute -top-8 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded border border-green-200">
            Copied to clipboard!
          </div>
        )}
      </div>
      
      <p className="text-xs text-amber-700">
        Make sure you have{' '}
        <a 
          href="https://cli.github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-amber-800"
        >
          GitHub CLI
        </a>{' '}
        installed first.
      </p>
    </div>
  )
}
