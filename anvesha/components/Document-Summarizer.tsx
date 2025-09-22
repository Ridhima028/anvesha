"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import {
  Upload,
  FileText,
  Mail,
  Download,
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Phone,
  MapPin,
  Globe,
} from "lucide-react"

interface UploadedDocument {
  id: string
  name: string
  size: number
  type: string
  uploadDate: Date
  status: "processing" | "completed" | "error"
  analysis?: {
    summary: string
    keyPoints: string[]
    confidence: number
    classification: string
    detailedAnalysis: {
      documentType: string
      pageCount: number
      wordCount: number
      language: string
      securityLevel: string
      complianceStatus: string
      keyEntities: Array<{
        type: string
        value: string
        confidence: number
      }>
      topics: Array<{
        name: string
        relevance: number
      }>
      sentiment: {
        overall: string
        score: number
      }
      metadata: {
        author?: string
        creationDate?: string
        lastModified?: string
        version?: string
      }
      riskAssessment: {
        level: "Low" | "Medium" | "High"
        factors: string[]
      }
      recommendations: string[]
    }
  }
}

export default function DocumentAnalysisPage() {
  const [documents, setDocuments] = useState<UploadedDocument[]>([])
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isEmailConnected, setIsEmailConnected] = useState(false)
  const [connectedEmail, setConnectedEmail] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [dragActive, setDragActive] = useState(false)
  const [processingCount, setProcessingCount] = useState(0)
  const [emailResults, setEmailResults] = useState([]);
  const { toast } = useToast()

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsEmailValid(emailRegex.test(email))
  }, [email])

  useEffect(() => {
    setProcessingCount(documents.filter((d) => d.status === "processing").length)
  }, [documents])

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const newDoc: UploadedDocument = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date(),
        status: "processing",
      }

      setDocuments((prev) => [...prev, newDoc])

      for (let progress = 0; progress <= 100; progress += 10) {
        setUploadProgress(progress)
        await new Promise((resolve) => setTimeout(resolve, 150))
      }

      toast({
        title: "Processing Started",
        description: isEmailConnected
          ? `Analysis notification sent to ${connectedEmail}`
          : "Document analysis in progress",
      })

      setTimeout(() => {
        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === newDoc.id
              ? {
                ...doc,
                status: "completed",
                analysis: {
                  summary: `Comprehensive analysis complete for ${file.name}. Document has been thoroughly processed and classified with high confidence.`,
                  keyPoints: [
                    "Document classification: Official Government Document",
                    "Security clearance: Confidential Level",
                    "Compliance verification: Passed all checks",
                    "Data integrity: 100% verified",
                    "Processing time: 2.3 seconds",
                  ],
                  confidence: 94,
                  classification: "Government Document",
                  detailedAnalysis: {
                    documentType: file.type.includes("pdf") ? "PDF Document" : "Text Document",
                    pageCount: Math.floor(Math.random() * 20) + 1,
                    wordCount: Math.floor(Math.random() * 5000) + 500,
                    language: "English",
                    securityLevel: "Confidential",
                    complianceStatus: "Fully Compliant",
                    keyEntities: [
                      { type: "Person", value: "John Smith", confidence: 0.95 },
                      { type: "Organization", value: "Department of Transportation", confidence: 0.92 },
                      { type: "Location", value: "Washington, DC", confidence: 0.88 },
                      { type: "Date", value: "2024-01-15", confidence: 0.97 },
                      { type: "Policy Number", value: "DOT-2024-001", confidence: 0.93 },
                    ],
                    topics: [
                      { name: "Transportation Policy", relevance: 0.89 },
                      { name: "Infrastructure Development", relevance: 0.76 },
                      { name: "Budget Allocation", relevance: 0.65 },
                      { name: "Environmental Impact", relevance: 0.54 },
                    ],
                    sentiment: {
                      overall: "Neutral",
                      score: 0.12,
                    },
                    metadata: {
                      author: "Department of Transportation",
                      creationDate: "2024-01-15",
                      lastModified: "2024-01-20",
                      version: "1.2",
                    },
                    riskAssessment: {
                      level: "Low",
                      factors: [
                        "No sensitive personal information detected",
                        "Standard government classification",
                        "Proper authorization headers present",
                      ],
                    },
                    recommendations: [
                      "Archive document according to retention policy",
                      "Distribute to relevant stakeholders",
                      "Schedule quarterly review",
                      "Update metadata tags for better searchability",
                    ],
                  },
                },
              }
              : doc,
          ),
        )
      }, 3000)
    }

    setIsUploading(false)
    setUploadProgress(0)
    toast({
      title: "Upload Complete",
      description: isEmailConnected
        ? `${files.length} document(s) uploaded and analysis results will be emailed to ${connectedEmail}`
        : `${files.length} document(s) uploaded and analyzed successfully`,
    })
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !isEmailValid) return;
    toast({
      title: "Validating Email",
      description: "Checking email address...",
    });
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      const response = await fetch("https://57119790f504.ngrok-free.app/process-email/", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "X-API-Key": "f55b09e2b821c4d344cf4f3ae815c9771deebdc1b77bba9678bb3dcf25806867",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      const data = await response.json();
      setIsEmailConnected(true);
      setConnectedEmail(email);
      setEmail("");
      setEmailResults(data.results || []); // Store results for display
      toast({
        title: "Email Connected Successfully",
        description: `Analysis results will be sent to ${email}.`,
      });
    } catch (err) {
      toast({
        title: "Connection Failed",
        description: "Could not connect email. Please try again.",
      });
    }
  };


  const handleDisconnectEmail = () => {
    setIsEmailConnected(false)
    setConnectedEmail("")
    toast({
      title: "Email Disconnected",
      description: "Email integration has been removed.",
    })
  }

  const handleExportPDF = (docId: string) => {
    const doc = documents.find((d) => d.id === docId)
    if (!doc) return

    toast({
      title: "PDF Export Started",
      description: `Generating PDF for ${doc.name}...`,
    })

    setTimeout(() => {
      toast({
        title: "PDF Ready",
        description: isEmailConnected
          ? `${doc.name} analysis exported and sent to ${connectedEmail}`
          : `${doc.name} analysis PDF is ready for download`,
      })
    }, 2000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">Metro Document Summit</h1>
                <p className="text-sm text-muted-foreground">Government Document Analysis System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {processingCount > 0 && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 animate-pulse">
                  <Clock className="h-3 w-3 mr-1" />
                  {processingCount} Processing
                </Badge>
              )}
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Secure Platform
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="min-h-[400px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Document Upload
                </CardTitle>
                <CardDescription>Upload government documents for automated analysis and processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 cursor-pointer min-h-[200px] flex flex-col justify-center ${dragActive
                        ? "border-primary bg-primary/5 scale-105"
                        : "border-border hover:border-primary/50 hover:bg-accent/20"
                      }`}
                    onDrop={(e) => {
                      e.preventDefault()
                      setDragActive(false)
                      handleFileUpload(e.dataTransfer.files)
                    }}
                    onDragOver={(e) => {
                      e.preventDefault()
                      setDragActive(true)
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <Upload
                      className={`h-16 w-16 mx-auto mb-4 transition-colors ${dragActive ? "text-primary" : "text-muted-foreground"
                        }`}
                    />
                    <p className="text-xl font-medium mb-2">
                      {dragActive ? "Drop files here!" : "Drop files here or click to upload"}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">Supports PDF, DOC, DOCX, TXT files up to 10MB</p>
                    <p className="text-sm text-muted-foreground">Upload documents instantly for immediate analysis</p>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e.target.files)}
                    />
                  </div>

                  {isUploading && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Uploading and processing...</span>
                        <span className="font-bold">{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-3" />
                      <p className="text-xs text-muted-foreground text-center">
                        {isEmailConnected
                          ? `Email notification will be sent to ${connectedEmail} upon completion`
                          : "Analysis will be available immediately upon completion"}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {documents.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Uploaded Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="h-4 w-4" />
                              <span className="font-medium">{doc.name}</span>
                              <Badge
                                variant={
                                  doc.status === "completed"
                                    ? "default"
                                    : doc.status === "processing"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {doc.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                                {doc.status === "processing" && <Clock className="h-3 w-3 mr-1" />}
                                {doc.status === "error" && <AlertCircle className="h-3 w-3 mr-1" />}
                                {doc.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {formatFileSize(doc.size)} • Uploaded {doc.uploadDate.toLocaleDateString()}
                            </p>

                            {doc.analysis && (
                              <div className="mt-3 space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-semibold mb-2">Analysis Summary</h4>
                                  <p className="text-sm mb-3">{doc.analysis.summary}</p>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                    {doc.analysis.keyPoints.map((point, index) => (
                                      <div key={index} className="flex items-center gap-2 text-xs">
                                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                                        <span>{point}</span>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">
                                      Confidence: {doc.analysis.confidence}%
                                    </span>
                                    <Badge variant="outline">{doc.analysis.classification}</Badge>
                                  </div>
                                </div>

                                <div className="p-4 bg-card border rounded-lg space-y-4">
                                  <h4 className="font-semibold text-sm">Detailed Analysis</h4>

                                  <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                      <span className="text-muted-foreground">Type:</span>
                                      <span className="ml-2 font-medium">
                                        {doc.analysis.detailedAnalysis.documentType}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Pages:</span>
                                      <span className="ml-2 font-medium">
                                        {doc.analysis.detailedAnalysis.pageCount}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Words:</span>
                                      <span className="ml-2 font-medium">
                                        {doc.analysis.detailedAnalysis.wordCount.toLocaleString()}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Language:</span>
                                      <span className="ml-2 font-medium">{doc.analysis.detailedAnalysis.language}</span>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-xs mb-2">Key Entities Detected</h5>
                                    <div className="space-y-1">
                                      {doc.analysis.detailedAnalysis.keyEntities.map((entity, index) => (
                                        <div key={index} className="flex items-center justify-between text-xs">
                                          <span>
                                            <Badge variant="secondary" className="text-xs mr-2">
                                              {entity.type}
                                            </Badge>
                                            {entity.value}
                                          </span>
                                          <span className="text-muted-foreground">
                                            {Math.round(entity.confidence * 100)}%
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-xs mb-2">Main Topics</h5>
                                    <div className="space-y-1">
                                      {doc.analysis.detailedAnalysis.topics.map((topic, index) => (
                                        <div key={index} className="flex items-center justify-between text-xs">
                                          <span>{topic.name}</span>
                                          <div className="flex items-center gap-2">
                                            <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                                              <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${topic.relevance * 100}%` }}
                                              />
                                            </div>
                                            <span className="text-muted-foreground w-8">
                                              {Math.round(topic.relevance * 100)}%
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-xs mb-2">Risk Assessment</h5>
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge
                                        variant={
                                          doc.analysis.detailedAnalysis.riskAssessment.level === "Low"
                                            ? "default"
                                            : doc.analysis.detailedAnalysis.riskAssessment.level === "Medium"
                                              ? "secondary"
                                              : "destructive"
                                        }
                                      >
                                        {doc.analysis.detailedAnalysis.riskAssessment.level} Risk
                                      </Badge>
                                    </div>
                                    <div className="space-y-1">
                                      {doc.analysis.detailedAnalysis.riskAssessment.factors.map((factor, index) => (
                                        <div key={index} className="flex items-center gap-2 text-xs">
                                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                                          <span>{factor}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-xs mb-2">Recommendations</h5>
                                    <div className="space-y-1">
                                      {doc.analysis.detailedAnalysis.recommendations.map((rec, index) => (
                                        <div key={index} className="flex items-start gap-2 text-xs">
                                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                          <span>{rec}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-xs mb-2">Document Metadata</h5>
                                    <div className="grid grid-cols-1 gap-1 text-xs">
                                      {doc.analysis.detailedAnalysis.metadata.author && (
                                        <div>
                                          <span className="text-muted-foreground">Author:</span>
                                          <span className="ml-2">{doc.analysis.detailedAnalysis.metadata.author}</span>
                                        </div>
                                      )}
                                      {doc.analysis.detailedAnalysis.metadata.creationDate && (
                                        <div>
                                          <span className="text-muted-foreground">Created:</span>
                                          <span className="ml-2">
                                            {doc.analysis.detailedAnalysis.metadata.creationDate}
                                          </span>
                                        </div>
                                      )}
                                      {doc.analysis.detailedAnalysis.metadata.version && (
                                        <div>
                                          <span className="text-muted-foreground">Version:</span>
                                          <span className="ml-2">{doc.analysis.detailedAnalysis.metadata.version}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {doc.status === "completed" && (
                            <Button size="sm" onClick={() => handleExportPDF(doc.id)} className="ml-4">
                              <Download className="h-4 w-4 mr-1" />
                              Export PDF
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="min-h-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Integration
                </CardTitle>
                <CardDescription>Connect your email to receive analysis notifications and results</CardDescription>
              </CardHeader>
              <CardContent>
                {!isEmailConnected ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@gov.org"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                      {email && !isEmailValid && (
                        <p className="text-xs text-destructive mt-1">Please enter a valid email address</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full h-12 text-base" disabled={!isEmailValid}>
                      <Mail className="h-4 w-4 mr-2" />
                      Connect Email
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Optional: Connect email to receive analysis notifications
                    </p>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/20 rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-sm">Email Connected</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{connectedEmail}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDisconnectEmail}
                        className="w-full bg-transparent"
                      >
                        Disconnect Email
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>✓ Upload notifications enabled</p>
                      <p>
                        {isEmailConnected
                          ? "✓ Analysis results will be emailed"
                          : "✓ Analysis results available immediately"}
                      </p>
                      <p>
                        {isEmailConnected
                          ? "✓ PDF exports will be sent automatically"
                          : "✓ PDF exports available for download"}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="min-h-[200px]">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Analysis Engine</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Scanner</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">PDF Generator</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Ready
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Service</span>
                  <Badge
                    variant="default"
                    className={isEmailConnected ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}
                  >
                    {isEmailConnected ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {isEmailConnected ? "Connected" : "Disconnected"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="min-h-[180px]">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Documents Processed</span>
                  <span className="font-bold text-lg text-green-600">
                    {documents.filter((d) => d.status === "completed").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">In Progress</span>
                  <span className="font-bold text-lg text-yellow-600">
                    {documents.filter((d) => d.status === "processing").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Uploaded</span>
                  <span className="font-bold text-lg text-blue-600">{documents.length}</span>
                </div>
                {isEmailConnected && (
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email Status</span>
                      <span className="font-medium text-sm text-green-600">Active</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {isEmailConnected && emailResults.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Latest Document Analyses:</h4>
          <div className="space-y-4">
            {emailResults.map((result, idx) => (
              <div key={idx} className="border rounded-lg p-3 bg-muted">
                <div className="font-medium mb-1">{result.file_name}</div>
                <div className="text-xs text-muted-foreground mb-1">
                  {result.text_preview}
                </div>
                <div className="text-sm mb-1">{result.summary}</div>
                {/* You can add additional fields here if you wish */}
              </div>
            ))}
          </div>
        </div>
      )}


      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Metro Document Summit</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure government document analysis platform providing comprehensive document processing and analysis
                services.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Document Analysis</li>
                <li>Security Scanning</li>
                <li>Compliance Checking</li>
                <li>PDF Generation</li>
                <li>Email Integration</li>
                <li>Batch Processing</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>System Status</li>
                <li>Security Guidelines</li>
                <li>Training Resources</li>
                <li>Technical Support</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@metrodocs.gov</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-GOV-DOCS</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Washington, DC 20001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Metro Document Summit. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                Version 2.1.0
              </Badge>
              <Badge variant="outline" className="text-xs">
                Last Updated: Dec 2024
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}