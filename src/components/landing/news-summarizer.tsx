'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { type SummarizeBatteryNewsOutput } from '@/ai/flows/summarize-battery-news';
import { getSummary } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  articleTitle: z.string().min(10, {
    message: 'Article title must be at least 10 characters.',
  }),
  articleContent: z.string().min(100, {
    message: 'Article content must be at least 100 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewsSummarizer() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeBatteryNewsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleTitle: '',
      articleContent: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    const { data, error } = await getSummary(values);
    setIsLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error,
      });
    } else if (data) {
      setResult(data);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Sparkles className="text-primary w-6 h-6" />
            Summarize an Article
          </CardTitle>
          <CardDescription>
            Paste the title and content of a news article below to get an AI-generated summary and relevance score.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="articleTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Article Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'New Breakthrough in Solid-State Battery Tech'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="articleContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Article Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the full content of the news article here..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Generate Summary'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="bg-card min-h-[300px] lg:min-h-full flex flex-col justify-center">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Analysis Result</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="space-y-2 pt-4">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                </div>
            </div>
          )}
          {!isLoading && !result && (
            <div className="text-center text-muted-foreground py-10">
              <p>Your summary and relevance score will appear here.</p>
            </div>
          )}
          {result && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Relevance to Meshesha</h3>
                <div className="flex items-center gap-4">
                  <Progress value={result.relevanceScore * 100} className="w-full" />
                  <span className="font-bold text-primary text-lg">
                    {(result.relevanceScore * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">AI-Generated Summary</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{result.summary}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
