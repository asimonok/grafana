package modules

const (
	All string = "all"

	CertGenerator string = "cert-generator"

	KubernetesAPIServer string = "kubernetes-apiserver"
	Kubernetes          string = "kubernetes"
)

var DependencyMap = map[string][]string{
	CertGenerator: {},

	KubernetesAPIServer: {CertGenerator},
	Kubernetes:          {KubernetesAPIServer},

	All: {Kubernetes},
}
