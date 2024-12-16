// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

// import { corsHeaders } from '../shared/cors.ts'

import nodemailer from 'npm:nodemailer@6.9.10';

import { createClient } from 'jsr:@supabase/supabase-js@2'

console.log('Hello from Cloudflare Trunstile!')

function ips(req: Request) {
  return req.headers.get('x-forwarded-for')?.split(/\s*,\s*/)
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",  // Allow all origins; use specific origins in production
    // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",  // Allowed HTTP methods
    // "Access-Control-Allow-Headers": "Content-Type, Authorization",  // Allowed header
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

async function save_data_to_supabase(new_data, req, type){
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    // { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  )

  // Database queries will have RLS policies enforced
  const { data, error } = await supabaseClient.from('contact_form').insert({
    data: new_data,
    email: new_data.email,
    name: new_data.name,
    type: ((type == 1) ? 'Homepage' : ((type == 2) ? 'Contact Page' : ((type == 3) ? 'Subscriber' : 'Unknown')))
  })

  // return true
}

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  console.log('start')
  console.log(corsHeaders())
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders() })
  }
  console.log('option ok')

  const { token, data, type } = await req.json()
  console.log(req)
  const clientIps = ips(req) || ['']
  const ip = clientIps[0]

  console.log(data)

  // Validate the token by calling the
  // "/siteverify" API endpoint.
  let formData = new FormData()
  formData.append('secret', Deno.env.get('CLOUDFLARE_SECRET_KEY') ?? '')
  formData.append('response', token)
  formData.append('remoteip', ip)

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  })

  const outcome = await result.json()
  console.log(outcome)
  if (!outcome.success) {
    return new Response('failure: no pass check', { headers: corsHeaders })
  }
  // return new Response('success', { headers: corsHeaders })


  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: Deno.env.get('PORTOFOLIO_USER'),  // SendGrid SMTP username
      pass: Deno.env.get('PORTOFOLIO_PASS')  // SendGrid SMTP password
    }
  });

  try {
    // const { to, subject, text } = await req.json();
    let subject, text, html;
    if(type == 1){
      subject = 'Data from Jeremiahjason.com Homepage Form'
      html = `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h3>Name: ${data.name}</h3>
            <h3>Email: ${data.email}</h3>
            <h3>Services: ${data.services}</h3>
            <p>Detail: ${data.detail}</p>
            <p>Budget: ${data.budget}</p>
          </body>
        </html>`
    }else if(type == 2){
      subject = 'Data from Jeremiahjason.com Contact Form'
      html = `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h3>Name: ${data.name}</h3>
            <h3>Email: ${data.email}</h3>
            <p>Message: ${data.message}</p>
          </body>
        </html>`
    }else if(type == 3){
      subject = 'Subscriber from Jeremiahjason.com'
      html = `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <h3>Email: ${data.email}</h3>
          </body>
        </html>`
    }else{
      subject = 'unknown',
      html = 'unknown'
    }

    await new Promise<void>((resolve, reject) => {
      transport.sendMail({
        from: "me@jeremiahjason.com",
        to: 'jeremiah.kaliki@gmail.com',
        subject: subject,
        text: JSON.stringify(data),
        html: html,
      }, (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
    // console.log(amp, subject)
    console.log('email ok')
    save_data_to_supabase(data, req, type)
    return new Response('success', { headers: corsHeaders() })

  } catch (error) {
    console.log(error)
    return new Response('failure: ' + error, { headers: corsHeaders() })
  }

})

// re_4eb1evS8_BMKXza7ijFtUfm3NEZC51vm1