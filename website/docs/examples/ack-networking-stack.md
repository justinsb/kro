---
sidebar_position: 10
---

# Networking Stack

```yaml title="networking-stack.yaml"
apiVersion: kro.run/v1alpha1
kind: ResourceGroup
metadata:
  name: networkingstack.kro.run
spec:
  # CRD Schema
  schema:
    apiVersion: v1alpha1
    kind: NetworkingStack
    spec:
      name: string
    status:
      networkingInfo:
        vpcID: ${vpc.status.vpcID}
        subnetAZA: ${subnetAZA.status.subnetID}
        subnetAZB: ${subnetAZB.status.subnetID}
        subnetAZC: ${subnetAZC.status.subnetID}
        securityGroup: ${securityGroup.status.id}
  # resources
  resources:
    - name: vpc
      template:
        apiVersion: ec2.services.k8s.aws/v1alpha1
        kind: VPC
        metadata:
          name: vpc-${schema.spec.name}
        spec:
          cidrBlocks:
            - 192.168.0.0/16
          enableDNSHostnames: false
          enableDNSSupport: true
    - name: subnetAZA
      template:
        apiVersion: ec2.services.k8s.aws/v1alpha1
        kind: Subnet
        metadata:
          name: subnet-a-${schema.spec.name}
        spec:
          availabilityZone: us-west-2a
          cidrBlock: 192.168.0.0/18
          vpcID: ${vpc.status.vpcID}
    - name: subnetAZB
      template:
        apiVersion: ec2.services.k8s.aws/v1alpha1
        kind: Subnet
        metadata:
          name: subnet-b-${schema.spec.name}
        spec:
          availabilityZone: us-west-2b
          cidrBlock: 192.168.64.0/18
          vpcID: ${vpc.status.vpcID}
    - name: subnetAZC
      template:
        apiVersion: ec2.services.k8s.aws/v1alpha1
        kind: Subnet
        metadata:
          name: subnet-c-${schema.spec.name}
        spec:
          availabilityZone: us-west-2c
          cidrBlock: 192.168.128.0/18
          vpcID: ${vpc.status.vpcID}
    - name: securityGroup
      template:
        apiVersion: ec2.services.k8s.aws/v1alpha1
        kind: SecurityGroup
        metadata:
          name: cluster-security-group-${schema.spec.name}
        spec:
          vpcID: ${vpc.status.vpcID}
          name: my-sg-${schema.spec.name}
          description: something something
```